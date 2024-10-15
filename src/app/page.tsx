import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-primary">Todo Application</h1>
      <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
        <SignedOut>
          <SignInButton
            fallbackRedirectUrl="/dashboard"
            signUpFallbackRedirectUrl="/dashboard"
          />
          &nbsp;
          <SignUpButton
            fallbackRedirectUrl="/dashboard"
            signInFallbackRedirectUrl="/dashboard"
          />
        </SignedOut>
        <SignedIn>
          <Link href={"/dashboard"}>Dashboard</Link>
        </SignedIn>
      </div>
    </div>
  );
}
