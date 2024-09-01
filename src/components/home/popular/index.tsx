import { popularProperties } from "@/constants";
import React from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";

export default function PopularPropertySection() {
  return (
    <section className="mx-auto w-full max-w-screen-lg px-10">
      <h1 className="text-center text-xl font-semibold text-[#2C3A61] xl:text-[40px]">
        Most Popular
      </h1>
      <p className="mx-auto mt-5 w-full text-center text-sm text-muted-foreground sm:w-2/3">
        Discover our most sought-after properties, handpicked for their
        exceptional features and prime locations.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {popularProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <div className="mt-10 flex w-full justify-center">
        <Button className="bg-[#355C83]">Load More Listings</Button>
      </div>
    </section>
  );
}
