import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommingSoon() {
  return (
    <div className="h-[100vh-100px] w-full">
      <Image
        src="/images/hero.png"
        alt="hero"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-5 bg-[#355C83]/40">
        <h1 className="w-full py-5 text-center text-4xl font-bold text-white lg:text-8xl">
          Coming Soon
        </h1>
        <Button asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
