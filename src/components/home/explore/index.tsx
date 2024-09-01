import Image from "next/image";
import React from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";

export default function ExploreSection() {
  return (
    <section className="mx-auto w-full max-w-screen-lg px-10">
      <h1 className="text-center text-xl font-semibold text-[#2C3A61] xl:text-[40px]">
        Explore with us
      </h1>
      <p className="mx-auto mt-5 w-full text-center text-sm text-muted-foreground sm:w-2/3">
        Discover a world of opportunities with our curated selection of
        properties.
      </p>
      <div className="flex flex-col gap-10">
        <div className="mt-10 flex flex-wrap gap-10 md:flex-nowrap">
          <div className="flex h-full w-full flex-col justify-center gap-5 md:w-[40%]">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/profile_2.jpg"
                  alt="profile"
                  width={50}
                  height={50}
                  className="h-10 w-10 rounded-full"
                />
                <h2 className="text-sm font-semibold">Priya Kapoor</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaShareAlt className="h-5 w-5 rounded-sm bg-slate-200 p-1 text-[#4A60A1]" />
                <FiHeart className="h-5 w-5 rounded-sm bg-slate-200 p-1 text-[#4A60A1]" />
                <FaPlus className="h-5 w-5 rounded-sm bg-slate-200 p-1 text-[#4A60A1]" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Discover Your Dream Home</h2>
            <p className="text-xs text-muted-foreground">
              Welcome to this stunning property located in the heart of the
              city. This beautiful home features modern architecture, spacious
              living areas, and top-of-the-line amenities.
            </p>
            <p className="text-xs text-muted-foreground">
              Enjoy breathtaking views from every room, a state-of-the-art
              kitchen, and luxurious bedrooms designed for comfort and
              relaxation. Perfect for families or individuals seeking a ...
              <span className="font-semibold text-[#355C83]">read more.</span>
            </p>
            <h1 className="text-2xl font-bold text-[#355C83]">₹ 1,000,000</h1>
          </div>
          <Image
            src="/images/explore.png"
            alt="explore"
            width={1000}
            height={1000}
            className="h-full w-full rounded-lg object-cover md:w-[55%]"
          />
        </div>
        <div className="mt-10 flex flex-col-reverse gap-10 md:flex-row">
          <Image
            src="/images/explore_2.png"
            alt="explore"
            width={1000}
            height={1000}
            className="h-full w-full rounded-lg object-cover md:w-[55%]"
          />
          <div className="flex h-full w-full flex-col justify-center gap-5 md:w-[40%]">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/profile_1.jpg"
                  alt="profile"
                  width={50}
                  height={50}
                  className="h-10 w-10 rounded-full"
                />
                <h2 className="text-sm font-semibold">Rahul Sharma</h2>
              </div>
              <div className="flex items-center gap-2">
                <FaShareAlt className="h-5 w-5 rounded-sm bg-slate-200 p-1 text-[#4A60A1]" />
                <FiHeart className="h-5 w-5 rounded-sm bg-slate-200 p-1 text-[#4A60A1]" />
                <FaPlus className="h-5 w-5 rounded-sm bg-slate-200 p-1 text-[#4A60A1]" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">Explore Luxurious Living</h2>
            <p className="text-xs text-muted-foreground">
              Welcome to this exquisite property located in one of the most
              sought-after neighborhoods. This luxurious home boasts
              contemporary design, expansive living spaces, and premium
              amenities that cater to your every need.
            </p>
            <p className="text-xs text-muted-foreground">
              The property features a spacious open-plan living area that
              seamlessly integrates with the dining and kitchen spaces, creating
              an ideal environment for entertaining guests. Large windows allow
              natural light to flood the interiors ...
              <span className="font-semibold text-[#355C83]">read more.</span>
            </p>
            <h1 className="text-2xl font-bold text-[#355C83]">$1,200,000</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
