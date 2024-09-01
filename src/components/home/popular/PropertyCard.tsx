import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaBath, FaBed, FaCar, FaExpand } from "react-icons/fa6";

export default function PropertyCard({
  id,
  title,
  description,
  price,
  location,
  images,
  bedrooms,
  bathrooms,
  garages,
  area,
  ownerName,
  ownerPhoto,
}: Property) {
  return (
    <div className="w-full rounded-lg shadow-md">
      <Image
        src={images[0]}
        alt={title}
        width={300}
        height={300}
        className="h-[200px] w-full rounded-t-lg object-cover"
      />
      <div className="flex flex-col gap-2 p-3">
        <h2 className="text-lg font-medium text-[#363A3D]">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#355C83]">
            {price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-muted-foreground">
            <FaCar className="h-3 w-3" />
            <p className="text-xs text-muted-foreground">{garages}</p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <FaBath className="h-3 w-3" />
            <p className="text-xs text-muted-foreground">{garages}</p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <FaBed className="h-3 w-3" />
            <p className="text-xs text-muted-foreground">{garages}</p>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <FaExpand className="h-3 w-3" />
            <p className="text-xs text-muted-foreground">{area} sq. ft.</p>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-neutral-500/20" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={ownerPhoto}
              alt={ownerName}
              width={50}
              height={50}
              className="h-7 w-7 rounded-full object-cover sm:h-10 sm:w-10"
            />
            <p className="text-xs font-semibold sm:text-sm">{ownerName}</p>
          </div>
          <Button
            size="sm"
            className="rounded-none bg-[#5A8B29] px-2 py-0 text-xs sm:text-sm"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
