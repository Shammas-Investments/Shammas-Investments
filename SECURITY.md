# Security Policy

## Overview

Shammas Investments takes security seriously. This document outlines the security measures implemented in this website and provides guidelines for reporting vulnerabilities.

## Security Measures Implemented

### 1. HTTP Security Headers

All HTTP responses include comprehensive security headers:

- **Strict-Transport-Security (HSTS)**: Forces HTTPS connections for 2 years
- **Content-Security-Policy (CSP)**: Prevents XSS attacks by controlling resource loading
- **X-Frame-Options**: Prevents clickjacking attacks (SAMEORIGIN)
- **X-Content-Type-Options**: Prevents MIME-sniffing attacks (nosniff)
- **X-XSS-Protection**: Enables browser XSS filter
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Restricts access to browser features (camera, microphone, geolocation)
- **X-DNS-Prefetch-Control**: Controls DNS prefetching
- **X-Download-Options**: Prevents file downloads from opening automatically (IE)
- **X-Permitted-Cross-Domain-Policies**: Restricts cross-domain policy files

### 2. Next.js Security Features

- **React Strict Mode**: Enabled for better error detection
- **Production Source Maps**: Disabled to protect source code
- **Asset Compression**: Gzip compression enabled
- **Image Optimization**: Sharp library for secure image processing

### 3. Dependency Security

- All dependencies updated to latest secure versions
- Regular security audits with `npm audit`
- Automated dependency updates monitoring

### 4. Environment Variables

- Environment variables properly separated (.env.local)
- Example file provided (.env.local.example)
- Sensitive data never committed to version control
- .gitignore properly configured

### 5. Input Validation & Sanitization

- Contact form inputs are validated
- Email validation on client and server side
- Protection against common injection attacks

### 6. HTTPS/SSL

- Configured for HTTPS-only in production
- HSTS header ensures browser always uses HTTPS
- SSL certificate required for production deployment

### 7. Rate Limiting (Recommended for Production)

When deploying, implement:
- API route rate limiting
- Contact form rate limiting
- DDoS protection via hosting provider (Vercel, Cloudflare, etc.)

### 8. Data Protection

- No sensitive user data stored
- Newsletter signups should use secure third-party services
- Contact form submissions should be encrypted in transit

## Known Vulnerabilities

### Development Dependencies (Non-Critical)

- **3 high severity vulnerabilities** in `eslint-config-next` glob dependency
- **Impact**: Development/linting tools only, does NOT affect production
- **Status**: Requires Next.js 15 upgrade (breaking changes)
- **Risk Level**: Low (dev dependencies don't run in production)

## Security Best Practices for Deployment

### Before Going Live:

1. **SSL/TLS Certificate**
   - Obtain valid SSL certificate
   - Configure HTTPS redirect
   - Test SSL configuration (ssllabs.com)

2. **Environment Variables**
   - Set production environment variables
   - Never expose API keys in client code
   - Use secret management for sensitive data

3. **Domain Configuration**
   - Configure proper DNS records
   - Set up DMARC, SPF, DKIM for email
   - Enable DNSSEC if available

4. **Hosting Security**
   - Enable DDoS protection
   - Configure WAF (Web Application Firewall) if available
   - Set up monitoring and alerts

5. **Access Control**
   - Use strong passwords for hosting accounts
   - Enable 2FA on all admin accounts
   - Limit access to production environment

6. **Monitoring**
   - Set up error tracking (Sentry, LogRocket, etc.)
   - Monitor for unusual traffic patterns
   - Set up uptime monitoring

7. **Backup**
   - Regular backups of content
   - Test restore procedures
   - Keep backups in secure location

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly:

1. **Do NOT** open a public GitHub issue
2. Email security concerns to: security@shammasinvestments.com
3. Provide detailed information:
   - Type of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect:

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Critical issues within 30 days

### Bug Bounty:

Currently, we do not offer a formal bug bounty program, but we greatly appreciate responsible disclosure and may offer recognition or rewards on a case-by-case basis.

## Security Update Policy

- **Critical vulnerabilities**: Patched within 24-48 hours
- **High severity**: Patched within 7 days
- **Medium severity**: Patched within 30 days
- **Low severity**: Patched in next regular update

## Regular Security Maintenance

### Weekly:
- Monitor dependency updates
- Review server logs for suspicious activity

### Monthly:
- Run `npm audit` and address issues
- Update dependencies to latest secure versions
- Review and test all security headers

### Quarterly:
- Complete security audit
- Penetration testing (if budget allows)
- Review and update security policies

## Compliance

This website is designed to comply with:

- **GDPR**: EU data protection regulations (minimal data collection)
- **CCPA**: California Consumer Privacy Act
- **WCAG 2.1**: Web accessibility standards
- **OWASP Top 10**: Common web vulnerabilities

## Security Checklist for Production

- [ ] SSL/TLS certificate installed and configured
- [ ] All environment variables set
- [ ] Security headers verified (securityheaders.com)
- [ ] Content Security Policy tested
- [ ] SSL configuration tested (ssllabs.com)
- [ ] DDoS protection enabled
- [ ] Rate limiting configured
- [ ] Error tracking set up
- [ ] Monitoring and alerts configured
- [ ] Backup system in place
- [ ] 2FA enabled on all admin accounts
- [ ] Access logs reviewed
- [ ] Vulnerability scan completed
- [ ] Dependency audit clean
- [ ] HTTPS redirect configured
- [ ] Security.txt file added (optional)

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [Mozilla Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

## Contact

For security-related questions or concerns:

- **Email**: security@shammasinvestments.com
- **Response Time**: Within 48 hours
- **PGP Key**: [Available upon request]

---

**Last Updated**: January 8, 2026
**Next Review**: April 8, 2026

© 2026 Shammas Investments LLC. All rights reserved.
