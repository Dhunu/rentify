import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BannerSection() {
  return (
    <div className="relative mt-40 flex w-full items-center justify-center py-32">
      <Image
        src="/images/banner.png"
        alt="banner"
        width={1920}
        height={500}
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
      />
      <div className="z-10 flex flex-col items-center gap-5">
        <h1 className="text-2xl font-semibold text-white sm:text-3xl">
          Find Best Place For Living
        </h1>
        <p className="w-full px-5 text-center text-sm text-white sm:w-[500px]">
          Spend vacations in best hotels and resorts find the great place of
          your choice using different searching options.
        </p>
        <Button className="bg-transparent text-white" variant="outline" asChild>
          <Link href="/contact-us">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
