import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdBookOnline } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

export default function Home() {
  return (
    <div className="absolute left-0 top-0 h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="absolute h-2/3 object-cover"
        />
        <div className="absolute left-0 top-0 h-2/3 w-full bg-black/40" />
        <div className="mx-auto flex h-2/3 w-full max-w-screen-2xl flex-col px-5 pt-60">
          <div className="z-20 flex flex-col gap-4">
            <div className="text-5xl font-bold text-white xl:text-8xl">
              <h1>
                Find the <span className="text-[#81A263]">property</span>
              </h1>
              <h1 className="mt-5">that fits your lifestyle.</h1>
            </div>
          </div>
          <div className="z-30 mt-10 flex h-20 w-2/3 items-center bg-white">
            <div className="flex flex-1 items-center p-5">
              <div className="flex w-60 items-center justify-between gap-5 border-r pr-5">
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    Location
                  </p>
                  <div className="text-lg">Mumbai, India</div>
                </div>
                <BiSolidDownArrow className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                className="mx-10 h-20 flex-1 border-none py-3 focus-visible:outline-none"
                placeholder="Search for a property"
              />
            </div>
            <div className="flex h-20 w-40 items-center justify-center bg-yellow-500 hover:cursor-pointer">
              ``
              <FaSearch className="mr-2 h-4 w-4" />
              <span className="text-xl font-medium">Search</span>
            </div>
          </div>
        </div>
        <div className="mx-auto h-1/3 w-full max-w-screen-2xl px-5">
          <div className="grid h-full w-full grid-cols-4 border-l border-r">
            <div className="flex h-full w-full flex-col justify-end border-r px-5 lg:px-10">
              <MdBookOnline className="h-14 w-14" />
              <h1 className="mt-5 flex h-32 items-start text-2xl font-bold lg:mt-10 lg:text-3xl">
                Online <br />
                Application
              </h1>
            </div>
            <div className="flex h-full w-full flex-col justify-end border-r bg-yellow-500 px-5 lg:px-10">
              <FaHandHoldingDollar className="h-14 w-14" />
              <h1 className="mt-5 flex h-32 items-start text-2xl font-bold lg:mt-10 lg:text-3xl">
                Pay Rent Online & Manage Tenancy
              </h1>
            </div>
            <div className="flex h-full w-full flex-col justify-end border-r px-5 lg:px-10">
              <ImProfile className="h-14 w-14" />
              <h1 className="mt-5 flex h-32 items-start text-2xl font-bold lg:mt-10 lg:text-3xl">
                Create a free <br />
                Renter Profile
              </h1>
            </div>
            <div className="flex h-full w-full flex-col justify-end px-5 lg:px-10">
              <Image
                src="/images/match.svg"
                alt="logo"
                width={100}
                height={100}
                className="h-14 w-[70px]"
              />
              <h1 className="mt-5 flex h-32 items-start text-2xl font-bold lg:mt-10 lg:text-3xl">
                Tenant Match <br />
                with Landlords
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
