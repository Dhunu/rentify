import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen w-full">
      <div className="relative z-0 flex h-[70vh] w-full items-center justify-center">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={1920}
          height={1080}
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
        />
        <div className="z-0 flex h-full w-full flex-col items-center justify-center">
          <h1 className="font-publicSans text-xl font-semibold text-white sm:text-3xl lg:text-[52px]">
            Find Your Dream Home
          </h1>
          <p className="mt-5 w-full px-10 text-center font-publicSans text-sm text-white sm:w-1/3 sm:text-lg lg:text-xl">
            Explore a wide range of properties, from cozy homes to luxurious
            getaways. Book easily and start your next adventure
          </p>
        </div>
      </div>
      <div className="relative h-[30vh] w-full px-10">
        <div className="z-10 mx-auto grid w-full -translate-y-1/2 grid-cols-4 rounded-md bg-white px-10 py-10 shadow-md md:w-1/2">
          <div className="flex flex-col items-center justify-center border-r-[1px] border-gray-300">
            <h3 className="text-base font-semibold text-[#2C3A61]">
              Locations
            </h3>
            <Select>
              <SelectTrigger className="border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">Mumbai</SelectItem>
                <SelectItem value="bandung">Delhi</SelectItem>
                <SelectItem value="surabaya">Kolkata</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-center justify-center border-r-[1px] border-gray-300">
            <h3 className="text-base font-semibold text-[#2C3A61]">
              Property Type
            </h3>
            <Select>
              <SelectTrigger className="border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select a property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">Apartment</SelectItem>
                <SelectItem value="bandung">House</SelectItem>
                <SelectItem value="surabaya">Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-center justify-center border-r-[1px] border-gray-300">
            <h3 className="text-base font-semibold text-[#2C3A61]">
              Rent Range
            </h3>
            <Select>
              <SelectTrigger className="border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0">
                <SelectValue placeholder="Select a rent range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">
                  ₹ 10,00,000 - ₹ 20,00,000
                </SelectItem>
                <SelectItem value="bandung">
                  ₹ 20,00,000 - ₹ 30,00,000
                </SelectItem>
                <SelectItem value="surabaya">
                  ₹ 30,00,000 - ₹ 40,00,000
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button
              variant="outline"
              className="text-base font-semibold text-[#2C3A61]"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
