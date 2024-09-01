import React from "react";
import Logo from "../Logo";
import RightSide from "./RightSide";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <nav className="z-20 flex h-16 w-full items-center justify-between border-b-[1px] border-neutral-400 bg-transparent px-5 sm:h-20 sm:px-10 lg:px-20">
      <Logo />
      <RightSide />
      <MobileNav />
    </nav>
  );
}
