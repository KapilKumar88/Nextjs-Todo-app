
type ClerkConfig = {
  publishableKey: string;
  secretKey: string;
  webhookSecret: string;
};

const clerkConfig: ClerkConfig = Object.freeze({
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  secretKey: process.env.CLERK_SECRET_KEY,
  webhookSecret: process.env.CLERK_WEBHOOK_SECRET_KEY,
}) as ClerkConfig;

export default clerkConfig;
