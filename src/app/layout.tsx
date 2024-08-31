import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Rentify - Find your dream home",
    description: "Rentify is a platform that helps you find your dream home.",
    openGraph: {
        title: "Rentify - Find your dream home",
        description:
            "Rentify is a platform that helps you find your dream home.",
        images: [
            {
                url: "/images/hero.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    fontSans.variable,
                    "min-h-screen bg-background font-sans antialiased"
                )}
            >
                {children}
            </body>
        </html>
    );
}
