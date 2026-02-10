/**
 * Shared email template components and utilities
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://shammasdevelopment.io';
const LOGO_URL = `${SITE_URL}/email-logo.png`;

// Brand colors
const colors = {
  black: '#171717',
  darkGray: '#262626',
  gray: '#525252',
  lightGray: '#737373',
  border: '#e5e5e5',
  background: '#f5f5f5',
  white: '#ffffff',
  green: '#22c55e',
  blue: '#3b82f6',
};

/**
 * Email header with logo
 */
export function emailHeader(options?: { dark?: boolean }): string {
  const isDark = options?.dark ?? false;
  const bgColor = isDark ? '#0a0a0a' : colors.background;

  return `
    <tr>
      <td align="center" style="padding: 32px 20px; background-color: ${bgColor};">
        <a href="${SITE_URL}" target="_blank" style="text-decoration: none;">
          <img src="${LOGO_URL}" alt="Shammas Development" width="200" style="display: block; max-width: 200px; height: auto;" />
        </a>
      </td>
    </tr>
  `;
}

/**
 * Email footer
 */
export function emailFooter(options?: { dark?: boolean }): string {
  const isDark = options?.dark ?? false;
  const textColor = isDark ? '#737373' : '#525252';
  const linkColor = isDark ? '#a3a3a3' : '#737373';

  return `
    <tr>
      <td style="padding: 32px 20px; text-align: center;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="padding-bottom: 16px;">
              <a href="https://linkedin.com/company/shammas-development" target="_blank" style="display: inline-block; margin: 0 8px;">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24" style="display: block; opacity: 0.6;" />
              </a>
              <!-- Twitter commented out
              <a href="https://twitter.com/shammasdev" target="_blank" style="display: inline-block; margin: 0 8px;">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" height="24" style="display: block; opacity: 0.6;" />
              </a>
              -->
            </td>
          </tr>
          <tr>
            <td align="center">
              <p style="margin: 0 0 8px 0; color: ${textColor}; font-size: 14px; font-weight: 500;">
                Shammas Development LLC
              </p>
              <p style="margin: 0 0 16px 0; color: ${textColor}; font-size: 13px;">
                Remote-first &bull; Serving clients across the United States
              </p>
              <p style="margin: 0; color: ${textColor}; font-size: 12px;">
                <a href="mailto:info@shammasdevelopment.io" style="color: ${linkColor};">info@shammasdevelopment.io</a>
                &nbsp;&bull;&nbsp;
                <a href="${SITE_URL}" style="color: ${linkColor};">shammasdevelopment.io</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

/**
 * Base email wrapper
 */
export function emailWrapper(content: string, options?: { dark?: boolean }): string {
  const isDark = options?.dark ?? false;
  const bgColor = isDark ? '#0a0a0a' : colors.background;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: ${bgColor}; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: ${bgColor};">
    <tr>
      <td align="center" style="padding: 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">
          ${content}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Hero section with icon
 */
export function heroSection(options: {
  icon: string;
  title: string;
  subtitle: string;
}): string {
  return `
    <tr>
      <td style="background: linear-gradient(135deg, ${colors.black} 0%, ${colors.darkGray} 100%); padding: 48px 40px; text-align: center; border-radius: 16px 16px 0 0;">
        <div style="width: 72px; height: 72px; background-color: ${colors.white}; border-radius: 50%; margin: 0 auto 24px auto; line-height: 72px;">
          <span style="font-size: 32px;">${options.icon}</span>
        </div>
        <h1 style="margin: 0; color: ${colors.white}; font-size: 28px; font-weight: 700;">${options.title}</h1>
        <p style="margin: 12px 0 0 0; color: #a3a3a3; font-size: 16px;">${options.subtitle}</p>
      </td>
    </tr>
  `;
}

/**
 * CTA Button
 */
export function ctaButton(options: {
  text: string;
  href: string;
  primary?: boolean;
}): string {
  const isPrimary = options.primary ?? true;
  const bgColor = isPrimary ? colors.black : colors.white;
  const textColor = isPrimary ? colors.white : colors.black;
  const border = isPrimary ? '' : `border: 2px solid ${colors.border};`;

  return `
    <a href="${options.href}" style="display: inline-block; background-color: ${bgColor}; color: ${textColor}; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; ${border}">${options.text}</a>
  `;
}

/**
 * Info row for displaying key-value pairs
 */
export function infoRow(label: string, value: string, options?: { isLink?: boolean; linkType?: 'email' | 'tel' }): string {
  let valueHtml = value;

  if (options?.isLink && options.linkType === 'email') {
    valueHtml = `<a href="mailto:${value}" style="color: ${colors.black}; text-decoration: none;">${value}</a>`;
  } else if (options?.isLink && options.linkType === 'tel') {
    valueHtml = `<a href="tel:${value}" style="color: ${colors.black}; text-decoration: none;">${value}</a>`;
  }

  return `
    <tr>
      <td style="padding: 16px 0; border-bottom: 1px solid ${colors.border};">
        <p style="margin: 0 0 4px 0; color: ${colors.lightGray}; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">${label}</p>
        <p style="margin: 0; color: ${colors.black}; font-size: 16px;">${valueHtml}</p>
      </td>
    </tr>
  `;
}

/**
 * Message box
 */
export function messageBox(content: string, options?: { accentColor?: string }): string {
  const accentColor = options?.accentColor ?? colors.blue;

  return `
    <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; margin: 24px 0; border-left: 4px solid ${accentColor};">
      <div style="color: ${colors.black}; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${content}</div>
    </div>
  `;
}

/**
 * Badge/Tag
 */
export function badge(text: string, color: string): string {
  return `<span style="display: inline-block; background-color: ${color}; color: ${colors.white}; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">${text}</span>`;
}

/**
 * Step list for processes
 */
export function stepList(steps: Array<{ title: string; description: string }>): string {
  return steps.map((step, index) => `
    <tr>
      <td style="padding: 12px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0">
          <tr>
            <td style="width: 32px; vertical-align: top;">
              <div style="width: 24px; height: 24px; background-color: ${colors.black}; border-radius: 50%; text-align: center; line-height: 24px; color: ${colors.white}; font-size: 12px; font-weight: 600;">${index + 1}</div>
            </td>
            <td style="padding-left: 12px; color: ${colors.gray}; font-size: 14px; line-height: 1.5;">
              <strong style="color: ${colors.black};">${step.title}</strong> — ${step.description}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `).join('');
}

export { SITE_URL, LOGO_URL, colors };
