# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ea44cc92-22ff-40c1-a6e2-31015e94ad31

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ea44cc92-22ff-40c1-a6e2-31015e94ad31) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ea44cc92-22ff-40c1-a6e2-31015e94ad31) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# JobNest Project

A modern job portal application built with React, TypeScript, and Tailwind CSS, with realistic company verification.

## Features

- Job seeker and employer registration
- Company email domain verification
- Modern UI with responsive design
- Form validation with Zod
- Toast notifications

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Company Email Verification

The application uses email domain verification to confirm company affiliation - a realistic and industry-standard approach used by platforms like LinkedIn.

### How It Works

1. **Company Name**: User enters their company name
2. **Company Email**: User provides their company email address
3. **Domain Verification**: System checks if email domain matches company name
4. **Verification**: Confirms user's affiliation with the company

### Verification Process

#### **Step 1: Enter Company Information**
- Company name (e.g., "Acme Corporation")
- Company email (e.g., "john@acmecorp.com")

#### **Step 2: Domain Matching**
- System extracts domain from email (@acmecorp.com)
- Checks if domain contains company name keywords
- Validates domain-company name correlation

#### **Step 3: Verification Status**
- **✅ Verified**: Domain matches company name
- **❌ Failed**: Domain doesn't match company name
- **🔄 Verifying**: Processing verification

### Examples of Valid Company Emails

| Company Name | Valid Email | Domain Match |
|--------------|-------------|--------------|
| Acme Corporation | john@acmecorp.com | ✅ acmecorp matches Acme |
| Tech Startup | sarah@techstartup.in | ✅ techstartup matches Tech Startup |
| Infosys | rahul@infosys.com | ✅ infosys matches Infosys |
| Tata Consultancy | priya@tcs.com | ✅ tcs matches Tata Consultancy |

### Benefits

✅ **Realistic**: Industry-standard verification method
✅ **Simple**: No complex APIs or external dependencies
✅ **Universal**: Works for any company with a domain
✅ **Secure**: Based on actual company email ownership
✅ **User-Friendly**: Familiar verification process
✅ **No Cost**: Completely free to implement

### Technical Implementation

The verification system:
- Extracts email domain using JavaScript
- Performs keyword matching between domain and company name
- Handles common domain variations (.com, .in, .org, etc.)
- Provides real-time feedback during verification
- Stores verification status in user profile

## Development

The application uses:
- **React** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Hook Form** with Zod validation
- **Lucide React** for icons

## Company Verification Features

The employer signup process includes realistic company verification:
- **Email Domain Verification**: Industry-standard approach
- **Real-time Feedback**: Immediate verification status
- **User-Friendly**: Simple and intuitive process
- **Secure**: Based on actual company email ownership
- **No External Dependencies**: Self-contained verification

### Verification Flow

1. **Company Name Input**: User enters company name
2. **Company Email Input**: User provides company email
3. **Verification Button**: Click to verify email domain
4. **Status Display**: Shows verification result
5. **Success/Failure**: Clear feedback with next steps

### User Experience

- **Clear Instructions**: Helpful tooltips and guidance
- **Visual Feedback**: Color-coded status indicators
- **Error Handling**: Helpful error messages
- **Retry Options**: Easy to retry failed verifications
- **Change Options**: Ability to modify information

### Production Considerations

For production deployment, consider adding:
- **Email Sending Verification**: Send verification email to confirm ownership
- **Domain Ownership Verification**: Check domain registration details
- **Rate Limiting**: Prevent abuse of verification system
- **Additional Security**: Multi-factor verification options

## License

MIT
