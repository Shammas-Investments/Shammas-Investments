import { NextResponse } from "next/server";

// Preview the welcome email template
export async function GET() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shammasdevelopment.io";
  const LOGO_URL = `${SITE_URL}/email-logo.png`;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Welcome to Shammas Development - Email Preview</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; -webkit-font-smoothing: antialiased;">
      <!-- Preview Banner -->
      <div style="background-color: #fbbf24; color: #000; text-align: center; padding: 12px; font-size: 14px; font-weight: 600;">
        EMAIL PREVIEW - This is how your welcome email will look
      </div>

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0a;">
        <tr>
          <td align="center" style="padding: 40px 20px;">

            <!-- Main Container -->
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

              <!-- Logo Header -->
              <tr>
                <td align="center" style="padding: 32px 20px 40px 20px;">
                  <a href="${SITE_URL}" target="_blank" style="text-decoration: none;">
                    <table role="presentation" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; display: inline-block;">
                      <tr>
                        <td style="padding: 16px 24px;">
                          <img src="${LOGO_URL}" alt="Shammas Development" width="220" style="display: block; max-width: 220px; height: auto;" />
                        </td>
                      </tr>
                    </table>
                  </a>
                </td>
              </tr>

              <!-- Main Card -->
              <tr>
                <td>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden;">

                    <!-- Hero Section -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #171717 0%, #262626 100%); padding: 48px 40px; text-align: center;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center">
                              <div style="width: 80px; height: 80px; background-color: #ffffff; border-radius: 50%; display: inline-block; line-height: 80px; margin-bottom: 24px;">
                                <span style="font-size: 36px;">&#10003;</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center">
                              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">You're In!</h1>
                              <p style="margin: 16px 0 0 0; color: #a3a3a3; font-size: 18px; font-weight: 400;">Welcome to the Shammas Development community</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Content Section -->
                    <tr>
                      <td style="padding: 48px 40px;">
                        <p style="margin: 0 0 24px 0; color: #171717; font-size: 16px; line-height: 1.7;">
                          Thank you for subscribing to our newsletter. You've just joined a community of forward-thinking professionals who value practical insights over hype.
                        </p>

                        <!-- What to Expect Box -->
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; border-radius: 12px; margin: 32px 0;">
                          <tr>
                            <td style="padding: 32px;">
                              <h2 style="margin: 0 0 20px 0; color: #171717; font-size: 18px; font-weight: 600;">What you'll receive:</h2>

                              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <table role="presentation" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 32px; vertical-align: top;">
                                          <div style="width: 24px; height: 24px; background-color: #171717; border-radius: 50%; text-align: center; line-height: 24px; color: #ffffff; font-size: 12px;">&#10003;</div>
                                        </td>
                                        <td style="color: #525252; font-size: 15px; line-height: 1.5; padding-left: 12px;">
                                          <strong style="color: #171717;">Industry Insights</strong> — Technology trends that matter
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <table role="presentation" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 32px; vertical-align: top;">
                                          <div style="width: 24px; height: 24px; background-color: #171717; border-radius: 50%; text-align: center; line-height: 24px; color: #ffffff; font-size: 12px;">&#10003;</div>
                                        </td>
                                        <td style="color: #525252; font-size: 15px; line-height: 1.5; padding-left: 12px;">
                                          <strong style="color: #171717;">AI & Automation</strong> — Practical implementation tips
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <table role="presentation" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 32px; vertical-align: top;">
                                          <div style="width: 24px; height: 24px; background-color: #171717; border-radius: 50%; text-align: center; line-height: 24px; color: #ffffff; font-size: 12px;">&#10003;</div>
                                        </td>
                                        <td style="color: #525252; font-size: 15px; line-height: 1.5; padding-left: 12px;">
                                          <strong style="color: #171717;">Software Development</strong> — Best practices and case studies
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0;">
                                    <table role="presentation" cellspacing="0" cellpadding="0">
                                      <tr>
                                        <td style="width: 32px; vertical-align: top;">
                                          <div style="width: 24px; height: 24px; background-color: #171717; border-radius: 50%; text-align: center; line-height: 24px; color: #ffffff; font-size: 12px;">&#10003;</div>
                                        </td>
                                        <td style="color: #525252; font-size: 15px; line-height: 1.5; padding-left: 12px;">
                                          <strong style="color: #171717;">Exclusive Resources</strong> — Early access to guides and tools
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <p style="margin: 0 0 32px 0; color: #525252; font-size: 15px; line-height: 1.7;">
                          We send emails only when we have something valuable to share. No spam, no fluff — just actionable insights for your business.
                        </p>

                        <!-- CTA Button -->
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center">
                              <table role="presentation" cellspacing="0" cellpadding="0">
                                <tr>
                                  <td style="border-radius: 8px; background-color: #171717;">
                                    <a href="${SITE_URL}" target="_blank" style="display: inline-block; padding: 16px 40px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; letter-spacing: 0.3px;">Explore Our Services</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 40px 20px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="padding-bottom: 24px;">
                        <!-- Social Links -->
                        <a href="https://linkedin.com/company/shammas-development" target="_blank" style="display: inline-block; margin: 0 8px; color: #737373; text-decoration: none;">
                          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24" style="display: block; opacity: 0.6;" />
                        </a>
                        <a href="https://twitter.com/shammasdev" target="_blank" style="display: inline-block; margin: 0 8px; color: #737373; text-decoration: none;">
                          <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" height="24" style="display: block; opacity: 0.6;" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <p style="margin: 0 0 8px 0; color: #737373; font-size: 14px; font-weight: 500;">
                          Shammas Development LLC
                        </p>
                        <p style="margin: 0 0 16px 0; color: #525252; font-size: 13px;">
                          Remote-first &bull; Serving clients across the United States
                        </p>
                        <p style="margin: 0; color: #525252; font-size: 12px;">
                          You received this email because you subscribed at <a href="${SITE_URL}" style="color: #737373;">shammasdevelopment.io</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return new NextResponse(htmlContent, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
