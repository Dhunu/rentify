import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaExpand, FaLocationDot, FaLocationPin } from "react-icons/fa6";

export default function RecentPropertyCard({
  images,
  title,
  location,
  area,
  scale,
}: Property & { scale: number }) {
  return (
    <div
      className="group relative h-full w-[250px] shrink-0 transition-all duration-300 hover:-translate-y-5 hover:cursor-pointer sm:w-[300px]"
      style={{ transform: `scale(${scale}%)` }}
    >
      <Image
        src={images[0]}
        alt={title}
        width={500}
        height={500}
        className="absolute left-0 top-0 -z-10 h-full w-full rounded-lg object-cover"
        draggable={false}
      />
      <div className="z-10 flex h-full w-full items-end justify-between gap-5 rounded-lg bg-gradient-to-t from-black/50 to-transparent p-5">
        <div className="flex w-1/2 gap-2">
          <FaLocationDot className="text-xl text-white" />
          <p className="line-clamp-1 text-xs text-white sm:text-sm">
            {location}
          </p>
        </div>
        <div className="flex w-1/2 gap-2">
          <FaExpand className="text-xl text-white" />
          <p className="line-clamp-1 text-xs text-white sm:text-sm">
            {area} sq. ft.
          </p>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
        <Button variant="outline">View Details</Button>
      </div>
    </div>
  );
}
