"use client";
import * as React from "react";
export default function LeadGen() {
  return (
    <div className="h-30 w-full flex justify-center">
      <div className=" bg-black h-15 rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:grid-rows-1 lg:md:grid-rows-1 sm:grid-rows-3">
        <div className=" m-2 sm:row-span-1">
          <div className="grid grid-cols-1">
            <div className="m-2">
              <div className="flex rounded-md shadow-sm  sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-white bold sm:text-sm font-robto">
                  Destination
                </span>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  className="ml-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 font-sanchez"
                  placeholder="Indonesia"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 col-span-1 sm:row-span-1">
          <div className="grid grid-cols-1 ">
            <div className="m-2">
              <div className="flex rounded-md shadow-sm  sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-white bold sm:text-sm font-sanchez">
                  Date
                </span>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="ml-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 font-sanchez"
                  placeholder="10/12/2025"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 col-span-1 sm:row-span-1 bg-blue-500 rounded-lg flex justify-center items-center">
          <button className="text-white bold text-center m-2 animate-pulse font-sanchez">
            Plan your Trip!
          </button>
        </div>
      </div>
    </div>
  );
}

export function LeadGenGroup() {
  return (
    <div className="h-30 w-screen flex justify-center ">
      <div className="mt-20 border border-white bg-black h-15 rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:grid-rows-1 lg:md:grid-rows-1 sm:grid-rows-3 p-2">
        <div className="sm:row-span-1">
          <div className="grid grid-cols-1">
            <div className="m-2">
              <div className="flex rounded-md shadow-sm  sm:max-w-md">
                <span className="flex select-none items-center pl-3 text-white bold sm:text-sm">
                  No. of Pax
                </span>
                <input
                  type="number"
                  name="destination"
                  id="destination"
                  className="ml-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="2"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:row-span-1 bg-blue-500 rounded-lg flex justify-center items-center">
          <button className="text-white bold text-center m-2">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export function LeadGenNew() {
  return (
    <div className="mt-10 h-30 w-screen flex justify-center ">
      <div className=" shadow-lg shadow-slate-600 col-span-1 sm:row-span-1 bg-obtext rounded-sm flex justify-center items-center">
        <button
          onClick={React.useEffect(() => {
            window.scrollTo({
              bottom: 0,
              behavior: "smooth",
            });
            // window is accessible here.
          }, [])}
          className="text-white bold text-center m-2 font-sanchez"
        >
          Plan your trip now!
        </button>
      </div>
    </div>
  );
}
