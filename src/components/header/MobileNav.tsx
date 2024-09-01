import React from "react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="absolute left-0 top-[80px] w-full px-5 sm:hidden">
      <div className="flex w-full items-center justify-evenly rounded-xl border-2 border-white py-2 text-[10px] font-semibold uppercase text-white">
        <Link href="/">Home</Link>
        <div className="h-[18px] w-[1px] bg-white" />
        <Link href="/about-us">About</Link>
        <div className="h-[18px] w-[1px] bg-white" />
        <Link href="/properties">Properties</Link>
        <div className="h-[18px] w-[1px] bg-white" />
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}
