"use client";

import { recentProperties } from "@/constants";
import React, { useEffect, useState } from "react";
import RecentPropertyCard from "./RecentPropertyCard";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function RecentPropertySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recentProperties.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + recentProperties.length) % recentProperties.length,
    );
  };
  return (
    <div className="-lg mt-40 w-full px-10 pb-20">
      <h1 className="text-center text-xl font-semibold text-[#2C3A61] xl:text-[40px]">
        Recent Properties
      </h1>
      <p className="mx-auto mt-5 w-full text-center text-sm text-muted-foreground sm:w-2/3">
        Discover our most recent properties, handpicked for their exceptional
        features and prime locations.
      </p>
      <div className="relative mt-10 flex h-[500px] w-full flex-col gap-5 overflow-hidden pt-10 sm:gap-6">
        <div
          className={cn(`flex flex-1 gap-5 transition-transform duration-300`)}
          style={
            isMobile
              ? { transform: `translateX(-${currentIndex * 270}px)` }
              : { transform: `translateX(-${currentIndex * 320}px)` }
          }
        >
          {recentProperties.map((property, index) => (
            <RecentPropertyCard
              key={index}
              {...property}
              scale={index === currentIndex ? 100 : 95}
            />
          ))}
        </div>
        <div className="flex justify-center gap-2">
          <Button
            size="sm"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-[#355C83] hover:bg-[#355C83] disabled:bg-[#B7BFD9]"
          >
            <FaArrowLeft />
          </Button>
          <Button
            size="sm"
            onClick={handleNext}
            disabled={currentIndex === recentProperties.length - 1}
            className="bg-[#355C83] hover:bg-[#355C83] disabled:bg-[#B7BFD9]"
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
