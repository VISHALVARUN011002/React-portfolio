# EmailJS Setup Guide

This contact form uses **EmailJS** to send emails directly from your portfolio without a backend server.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up Free"
3. Create an account using your email

## Step 2: Set Up Email Service

1. After logging in, go to the **Email Services** section
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended - easiest setup)
   - Or connect to your custom email
4. Follow the prompts to authorize your email
5. Copy your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** section
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_email}}
Name: {{from_name}}

Message:
{{message}}
```

### Template Variables:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{message}}` - User's message
- `{{to_email}}` - Your email (receiver)

4. Copy your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

## Step 5: Update Environment Variables

Update the `.env.local` file with your credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

## Step 6: Test the Form

1. Run your dev server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email to confirm it's working

## Troubleshooting

- **"Missing credentials" error**: Make sure all three environment variables are set correctly
- **Email not received**: Check your email's spam/junk folder
- **Template not matching**: Ensure your template variables match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`

## Limits

- **Free Plan**: 200 emails/month
- **Paid Plans**: Unlimited emails

For more info, visit [EmailJS Documentation](https://www.emailjs.com/docs/)
