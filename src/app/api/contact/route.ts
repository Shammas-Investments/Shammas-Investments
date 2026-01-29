import { NextRequest } from 'next/server';
import {
  RateLimiter,
  getClientIP,
  sanitizeInput,
  successResponse,
  errorResponse,
  rateLimitResponse,
  configErrorResponse,
  serverErrorResponse,
  isSpamSubmission,
  spamResponse,
  logError,
} from '@/lib/api-helpers';
import { validateContactForm } from '@/lib/validations';
import type { ContactFormData } from '@/types/api';

// Rate limiter: 3 requests per minute per IP
const rateLimiter = new RateLimiter({ maxRequests: 3 });

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = getClientIP(request);

    // Check rate limit
    if (!rateLimiter.check(ip)) {
      return rateLimitResponse();
    }

    // Parse request body
    const body = await request.json() as ContactFormData;
    const { name, email, company, phone, message, budget, botcheck } = body;

    // Honeypot check - if botcheck is filled, it's a bot
    if (isSpamSubmission(botcheck)) {
      return spamResponse();
    }

    // Validate required fields
    const validation = validateContactForm({ name, email, message });
    if (!validation.isValid) {
      return errorResponse(validation.error!);
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : '',
      phone: phone ? sanitizeInput(phone) : '',
      message: sanitizeInput(message, 5000),
      budget: budget ? sanitizeInput(budget) : '',
    };

    // Get API key from server-side environment variable
    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_ACCESS_KEY) {
      logError('Contact API', 'WEB3FORMS_ACCESS_KEY not configured');
      return configErrorResponse();
    }

    // Submit to Web3Forms with retry logic
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: sanitizedData.name,
      email: sanitizedData.email,
      company: sanitizedData.company,
      phone: sanitizedData.phone,
      message: sanitizedData.message,
      budget: sanitizedData.budget,
      subject: 'New Contact Form Submission - Shammas Development',
      from_name: 'Shammas Development Website',
      botcheck: '',
    };

    let response;
    let lastError;
    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Shammas-Development-Website/1.0',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        break;
      } catch (fetchError) {
        lastError = fetchError;
        if (attempt < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
        }
      }
    }

    if (!response) {
      logError('Contact API', lastError);
      return serverErrorResponse('Unable to send message. Please try again or email us directly at info@shammasdevelopment.io');
    }

    // Check content type to ensure we got JSON (handles Cloudflare challenge pages)
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      logError('Contact API', `Unexpected response type: ${contentType}`);
      return serverErrorResponse('Service temporarily unavailable. Please try again or email us directly at info@shammasdevelopment.io');
    }

    const result = await response.json();

    if (result.success) {
      return successResponse(undefined, 'Your message has been sent successfully.');
    } else {
      return errorResponse(result.message || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    logError('Contact API', error);
    return serverErrorResponse('An error occurred. Please try again or email us directly at info@shammasdevelopment.io');
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return successResponse();
}
