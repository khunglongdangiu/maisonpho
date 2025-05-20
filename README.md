# Maison Pho Website

## Setting Up the Gemini API Key

The chatbot feature requires a valid Gemini API key to function properly. Follow these steps to set up your API key:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create a Gemini API key
2. Sign in with your Google account
3. Click on "Get API key" and create a new key
4. Copy the API key

### Adding the API Key to Your Environment

#### Local Development
Create or update your `.env.local` file in the project root:

\`\`\`
GEMINI_API_KEY=your_api_key_here
\`\`\`

#### Vercel Deployment
Add the API key to your Vercel project:

1. Go to your project in the Vercel dashboard
2. Navigate to Settings > Environment Variables
3. Add a new variable with the name `GEMINI_API_KEY` and paste your API key as the value
4. Redeploy your application

## Troubleshooting

If you encounter API key errors:

1. Verify that the API key is correctly set in your environment variables
2. Ensure the API key is valid and active
3. Check that you haven't exceeded your API usage limits
4. Make sure your API key has access to the Gemini Pro model

For more information, visit the [Google AI Studio documentation](https://ai.google.dev/docs).
