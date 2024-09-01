import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-screen-lg px-10 pb-32 pt-40">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="flex flex-col gap-10">
            <div className="flex h-10 w-full items-start">
              <div className="flex h-10 items-center gap-2">
                <Image
                  src="/images/logo_black.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className="flex h-5 w-5 sm:h-10 sm:w-10"
                />
                <h1 className="text-sm font-bold sm:text-xl">Rentify</h1>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1 className="text-sm font-semibold sm:text-xl">Contact Us</h1>
              <div className="flex flex-col gap-2">
                <p className="text-[10px] text-muted-foreground sm:text-sm">
                  <span className="font-semibold">Call: </span>+91-8011158661
                </p>
                <p className="text-[10px] text-muted-foreground sm:text-sm">
                  <span className="font-semibold">Email: </span>
                  developer@angelsaikia.com
                </p>
                <p className="text-[10px] text-muted-foreground sm:text-sm">
                  <span className="font-semibold">Address: </span> Uriagaon,
                  Nagaon, Assam, India
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href="https://www.facebook.com/angel.saikia.140/"
                  className="rounded-lg bg-slate-200 p-1"
                  target="_blank"
                >
                  <FaFacebookF className="h-3 w-3 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/angel-saikia"
                  className="rounded-lg bg-slate-200 p-1"
                  target="_blank"
                >
                  <FaLinkedin className="h-3 w-3 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="https://instagram.com/saikiaangel_"
                  className="rounded-lg bg-slate-200 p-1"
                  target="_blank"
                >
                  <FaInstagram className="h-3 w-3 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex h-10 w-full items-center">
              <h1 className="text-sm font-semibold sm:text-xl">Features</h1>
            </div>
            <div className="flex flex-col gap-5">
              <Link
                href="/"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Home
              </Link>
              <Link
                href="/host"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Become a Host
              </Link>
              <Link
                href="/pricing"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Blog
              </Link>
              <Link
                href="/contact-us"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex h-10 w-full items-center">
              <h1 className="text-sm font-semibold sm:text-xl">Company</h1>
            </div>

            <div className="flex flex-col gap-5">
              <Link
                href="/about-us"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                About Us
              </Link>
              <Link
                href="/press"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Press
              </Link>
              <Link
                href="/contact-us"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Contact
              </Link>
              <Link
                href="/careers"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex h-10 w-full items-center">
              <h1 className="text-sm font-semibold sm:text-xl">Legal</h1>
            </div>

            <div className="flex flex-col gap-5">
              <Link
                href="/terms-of-service"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/security"
                className="text-[10px] font-medium text-muted-foreground sm:text-sm"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#355C83]">
        <div className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-between px-10 py-5 sm:flex-row">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Rentify. All rights reserved.
          </p>
          <p className="text-sm text-white">
            <span className="font-semibold">Developed by: </span>
            <Link href="https://angelsaikia.com" target="_blank">
              Angel Saikia
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
