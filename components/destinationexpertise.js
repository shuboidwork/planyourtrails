import React from "react";
import Image from "next/image";

const destination = [
  {
    dest: "Bali",
    url: "/destinations/bali.jpg",
  },
  {
    dest: "Singapore",
    url: "/destinations/singapore.jpg",
  },
  {
    dest: "Thailand",
    url: "/destinations/thailand.jpg",
  },
  {
    dest: "Coorg",
    url: "/destinations/coorg.jpg",
  },
  {
    dest: "Indonesia",
    url: "/destinations/indonesia.jpg",
  },
  {
    dest: "Bir",
    url: "/destinations/bir.jpg",
  },
  {
    dest: "Dubai",
    url: "/destinations/dubai.jpg",
  },
];

export default function DestiNationExpertise() {
  return (
    <div className="py-5 w-90 align-middle">
      <div className="px-5 text-2xl font-sans bold text-center text-gray-500">
        travel like us to destinations we have traveled
      </div>
      <div className="w-screen overflow-auto no-scrollbar grid grid-rows-1 grid-flow-col justify-start scroll-pl-6 snap-x ">
        {destination.map((hello1) => (
          <div key={hello1.dest} className="pr-5 pl-5 pt-5 relative">
            <div
              style={{ "--image-url": `url(${hello1.url})` }}
              className={`static bg-cover bg-opacity-50 bg-[image:var(--image-url)] snap-center w-60 h-80 rounded-2xl`}
            >
              <div className="absolute bottom-0">
                <div className="rounded-lg w-60 bg-gradient-to-b from-transparent to-black text-white text-2xl md:text-2xl  bold font-denton text-center">
                  {hello1.dest}
                  <div className=" text-sm md:text-sm  font-denton text-center text-gray-500">
                    starting Rs.10,000
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
