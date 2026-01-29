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
  logError,
} from '@/lib/api-helpers';
import { validateQuoteForm } from '@/lib/validations';
import type { QuoteFormData } from '@/types/api';

// Rate limiter: 5 requests per minute per IP
const rateLimiter = new RateLimiter({ maxRequests: 5 });

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIP(request);

    if (!rateLimiter.check(ip)) {
      return rateLimitResponse();
    }

    const body = await request.json() as QuoteFormData;
    const { name, email, summary } = body;

    // Validate required fields
    const validation = validateQuoteForm({ name, email, summary });
    if (!validation.isValid) {
      return errorResponse(validation.error!);
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      summary: sanitizeInput(summary, 5000),
    };

    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_ACCESS_KEY) {
      logError('Quote API', 'WEB3FORMS_ACCESS_KEY not configured');
      return configErrorResponse();
    }

    // Submit to Web3Forms with retry logic
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'Your Service Plan Summary - Shammas Development',
      from_name: 'Shammas Development',
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.summary,
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
      logError('Quote API', lastError);
      return serverErrorResponse('Unable to send email. Please try again or contact us directly at info@shammasdevelopment.io');
    }

    // Check content type to ensure we got JSON (handles Cloudflare challenge pages)
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      logError('Quote API', `Unexpected response type: ${contentType}`);
      return serverErrorResponse('Service temporarily unavailable. Please try again or contact us directly at info@shammasdevelopment.io');
    }

    const result = await response.json();

    if (result.success) {
      return successResponse(undefined, 'Summary sent to your email!');
    } else {
      return errorResponse('Failed to send email. Please try again.');
    }
  } catch (error) {
    logError('Quote API', error);
    return serverErrorResponse('An error occurred. Please try again or contact us directly at info@shammasdevelopment.io');
  }
}

export async function OPTIONS() {
  return successResponse();
}
