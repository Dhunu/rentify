import Header from "@/components/header/Header";
import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex flex-col min-h-screen relative">
            <Header />
            {children}
        </main>
    );
}
