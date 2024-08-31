import React from "react";
import Logo from "../Logo";
import RightSide from "./RightSide";
import MiddleSide from "./MiddleSide";

export default function Header() {
    return (
        <nav className="w-full h-16 sm:h-20 bg-black/20 border-b-[3px] border-neutral-400 z-20">
            <div className="w-full h-full  flex justify-between items-center px-5 max-w-screen-2xl mx-auto">
                <Logo />
                <MiddleSide />
                <RightSide />
            </div>
        </nav>
    );
}
