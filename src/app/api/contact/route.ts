import { NextRequest, NextResponse } from 'next/server';

// Rate limiting configuration (in-memory, resets on deployment)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

// Simple rate limiter
function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const userLimit = rateLimit.get(identifier);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimit.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

// Input validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000); // Limit length and trim
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('x-real-ip') ||
               'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.'
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, company, phone, message, budget } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Name, email, and message are required.'
        },
        { status: 400 }
      );
    }

    // Validate email
    if (!validateEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email address.'
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      company: company ? sanitizeInput(company) : '',
      phone: phone ? sanitizeInput(phone) : '',
      message: sanitizeInput(message),
      budget: budget ? sanitizeInput(budget) : '',
    };

    // Get API key from server-side environment variable
    const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error('WEB3FORMS_ACCESS_KEY not configured');
      return NextResponse.json(
        {
          success: false,
          error: 'Service configuration error. Please contact support.'
        },
        { status: 500 }
      );
    }

    // Submit to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: sanitizedData.name,
        email: sanitizedData.email,
        company: sanitizedData.company,
        phone: sanitizedData.phone,
        message: sanitizedData.message,
        budget: sanitizedData.budget,
        subject: 'New Contact Form Submission - Shammas Investments',
        from_name: 'Shammas Investments Website',
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully.',
      });
    } else {
      throw new Error('Web3Forms submission failed');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An error occurred. Please try again or email us directly.'
      },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
