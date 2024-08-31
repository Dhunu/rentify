"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MiddleSide() {
    const pathname = usePathname();
    return (
        <div className="flex items-center gap-5 h-full">
            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className="relative h-full flex items-center"
                >
                    <span className="text-sm font-medium text-white">
                        {link.name}
                    </span>
                    {pathname === link.href && (
                        <div className="absolute -bottom-[3px] w-full h-[3px] rounded-t-lg bg-yellow-500 z-10 " />
                    )}
                </Link>
            ))}
        </div>
    );
}
