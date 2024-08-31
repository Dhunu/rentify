"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MiddleSide() {
  const pathname = usePathname();
  return (
    <div className="hidden h-full items-center gap-5 sm:flex">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="relative flex h-full items-center"
        >
          <span className="text-sm font-medium text-white">{link.name}</span>
          {pathname === link.href && (
            <div className="absolute -bottom-[3px] z-10 h-[3px] w-full rounded-t-lg bg-yellow-500" />
          )}
        </Link>
      ))}
    </div>
  );
}
