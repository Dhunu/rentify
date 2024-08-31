import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function RightSide() {
    return (
        <div className="flex items-center gap-4">
            <Button
                size="sm"
                className="text-white bg-[#81A263] py-6 rounded-none"
                asChild
            >
                <Link href="/pay-rent">Pay Rent</Link>
            </Button>
            <Button variant="link" className="text-white" asChild>
                <Link href="/login">Login</Link>
            </Button>
        </div>
    );
}
