# Free Integrations Setup Guide

This guide will help you set up free integrations for your Shammas Investments website.

## 1. Favicon Setup

### Option A: Use Online Favicon Generator (Recommended)
1. Go to [Favicon.io](https://favicon.io/favicon-converter/)
2. Upload your `src/appLogo.png` file
3. Click "Download" to get your favicon package
4. Extract the downloaded files
5. Copy these files to your `/public` folder:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option B: Use RealFaviconGenerator
1. Go to [RealFaviconGenerator.net](https://realfavicongenerator.net/)
2. Upload your logo
3. Customize settings for different platforms
4. Download and extract to `/public` folder

## 2. Contact Form Setup (Web3Forms - FREE)

### Step 1: Get Your Access Key
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email: `info@shammasinvestments.com`
3. Click "Create Access Key"
4. Copy the access key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add to Environment Variables
Create/edit `.env.local` file:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

### Step 3: Verify Email
- Web3Forms will send a verification email
- Click the link to verify
- You can now receive unlimited form submissions for FREE!

## 3. Newsletter Setup (Mailchimp - FREE)

### Step 1: Create Mailchimp Account
1. Go to [https://mailchimp.com/](https://mailchimp.com/)
2. Sign up for FREE account (up to 500 contacts)
3. Complete account setup

### Step 2: Create Audience
1. In Mailchimp dashboard, go to "Audience"
2. Click "Create Audience"
3. Fill in details:
   - Audience name: "Shammas Investments Newsletter"
   - Default from email: info@shammasinvestments.com
   - Default from name: Shammas Investments

### Step 3: Get Embedded Form Code
1. Go to Audience → Signup forms → Embedded forms
2. Copy the form HTML code
3. Or use the API endpoint method (see below)

### Step 4: Get API Credentials (For Custom Integration)
1. Go to Account → Extras → API keys
2. Create a new API key
3. Copy the API key
4. Note your audience ID (found in Audience → Settings → Audience name and defaults)

### Step 5: Get Embedded Form URL (Recommended for Newsletter)
1. Go to Audience → Signup forms → Embedded forms
2. Scroll to the form code section
3. Find the form action URL (looks like this):
   ```html
   <form action="https://shammasinvestments.us12.list-manage.com/subscribe/post?u=xxx&amp;id=xxx">
   ```
4. Copy the URL from the action attribute

### Step 6: Add to Environment Variables
```env
# For Newsletter Form (Simple - Recommended)
NEXT_PUBLIC_MAILCHIMP_URL=https://shammasinvestments.us12.list-manage.com/subscribe/post?u=xxx&id=xxx

# OR for API Integration (Advanced)
NEXT_PUBLIC_MAILCHIMP_API_KEY=your_api_key_here
NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID=your_audience_id_here
NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX=us12  # Check your API key for the prefix
```

## 4. Calendly Setup (FREE)

### Step 1: Create Calendly Account
1. Go to [https://calendly.com/](https://calendly.com/)
2. Sign up for FREE account
3. Connect your calendar (Google Calendar, Outlook, etc.)

### Step 2: Create Event Type
1. Click "Create" → "Event Type"
2. Choose "One-on-One"
3. Set up your meeting:
   - Event name: "Shammas Investments Consultation"
   - Duration: 30 minutes (or your preference)
   - Location: Zoom, Google Meet, or Phone
4. Customize scheduling settings
5. Click "Save & Close"

### Step 3: Get Your Calendly Link
1. Go to your event type
2. Click "Copy Link"
3. Your link will look like: `https://calendly.com/your-username/consultation`

### Step 4: Add to Environment Variables
```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/consultation
```

## 5. Alternative FREE Services

### Contact Forms (Choose One)
- **Web3Forms** (Recommended): Unlimited submissions
- **Formspree**: 50 submissions/month free
- **Getform**: 100 submissions/month free
- **EmailJS**: 200 emails/month free

### Newsletter (Choose One)
- **Mailchimp** (Recommended): 500 contacts free
- **ConvertKit**: 300 subscribers free
- **EmailOctopus**: 2,500 subscribers free
- **Buttondown**: 100 subscribers free

### Scheduling (Choose One)
- **Calendly** (Recommended): Unlimited 1-on-1 meetings
- **Cal.com**: Open source, self-hosted option
- **TidyCal**: One-time payment, unlimited bookings

## 6. Complete .env.local File Example

Create `/Users/muhammadhassannaeem/Desktop/studio/.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://shammasinvestments.com

# Web3Forms (Contact Form) - FREE unlimited submissions
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here

# Mailchimp (Newsletter) - FREE up to 500 contacts
NEXT_PUBLIC_MAILCHIMP_URL=https://shammasinvestments.us12.list-manage.com/subscribe/post?u=xxx&id=xxx

# Calendly (Scheduling) - FREE unlimited 1-on-1 meetings
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/shammas-investments/consultation

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 7. After Setup

1. **Test Contact Form**: Submit a test message
2. **Test Newsletter**: Subscribe with a test email
3. **Test Calendly**: Book a test appointment
4. **Check Spam Folders**: Initial emails might go to spam

## 8. Going Live Checklist

- [ ] Favicon files added to `/public` folder
- [ ] Web3Forms access key verified
- [ ] Mailchimp account created and audience set up
- [ ] Calendly event type created
- [ ] All environment variables added to `.env.local`
- [ ] Test contact form submission received
- [ ] Test newsletter signup received in Mailchimp
- [ ] Test Calendly booking successful
- [ ] Production environment variables set on hosting platform

## Need Help?

- **Web3Forms Docs**: https://docs.web3forms.com/
- **Mailchimp API**: https://mailchimp.com/developer/
- **Calendly Help**: https://help.calendly.com/

---

All services above have **FREE forever plans** that are perfect for getting started!
