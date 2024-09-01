import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/logo.png"
        alt="Rentify"
        width={50}
        height={50}
        className="h-10 w-10 object-cover"
      />
      <h1 className="text-2xl font-bold text-white">Rentify</h1>
    </div>
  );
}
