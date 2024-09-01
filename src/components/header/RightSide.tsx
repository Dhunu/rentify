import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { navLinks } from "@/constants";
import Image from "next/image";

export default function RightSide() {
  return (
    <div className="hidden w-[45%] items-center justify-between lg:flex">
      {navLinks.map((link, index) => (
        <Button key={index} variant="link" asChild>
          <Link
            href={link.href}
            className="text-[14px] font-semibold text-white"
          >
            {link.name}
          </Link>
        </Button>
      ))}
      <Button
        variant="ghost"
        className="relative px-0 py-0 hover:bg-transparent"
      >
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="h-10 w-10 object-cover"
        />
        <div className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 font-semibold text-white">
          3
        </div>
      </Button>
    </div>
  );
}
