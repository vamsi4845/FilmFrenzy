"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";
const GoogleSignInButton = () => {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GoogleIcon} alt="Google icon" className="h-6 w-6" />
    </Button>
  );
};
export default GoogleSignInButton;
