import React from "react";
import Image from "next/image";
import Link from "next/link";

const destination = [
  {
    dest: "Goa",
    url: "/group/goa.jpg",
  },
  {
    dest: "Coorg",
    url: "/group/coorg.jpg",
  },
  {
    dest: "Manali",
    url: "/common/travel2.jpg",
  },
  {
    dest: "Shimla",
    url: "/destinations/test.jpg",
  },
  {
    dest: "Indonesia",
    url: "/destinations/indonesia.jpg",
  },
  {
    dest: "France",
    url: "/destinations/dubai.jpg",
  },
];

export default function GroupTravel() {
  return (
    <div className="">
      <div className="w-screen overflow-auto no-scrollbar grid grid-rows-1 grid-flow-col justify-start scroll-pl-6 snap-x ">
        {destination.map((hello1) => (
          <Link key={hello1.dest} href={"/group_trip"}>
            <div className="pr-5 pl-5 pt-5 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-20 duration-300">
              <div
                style={{ "--image-url": `url(${hello1.url})` }}
                className={`static bg-cover bg-opacity-50 bg-[image:var(--image-url)] snap-center w-60 h-80 rounded-lg shadow-lg shadow-white border border-white`}
              >
                <div className="absolute bottom-2 mb-2 bg-cover bg-center bg-[url('/common/Union.png')]">
                  <div className="rounded-lg w-60 bg-gradient-to-b from-transparent text-black text-2xl md:text-2xl  bold font-denton text-center">
                    {hello1.dest}
                    <div className=" text-sm md:text-sm  font-denton text-center text-gray-700">
                      starting Rs.10,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
