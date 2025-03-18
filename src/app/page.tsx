import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
      <SignedOut>
        <SignInButton />
        {/* <SignUpButton /> */}


      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
