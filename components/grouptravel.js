import React from "react";
import Image from "next/image";

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
    url: "/destinations/mysore.jpg",
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
    url: "/destinations/bir.jpg",
  },
  {
    dest: "France",
    url: "/destinations/bir.jpg",
  },
  {
    dest: "France",
    url: "/destinations/bir.jpg",
  },
];

export default function GroupTravel() {
  return (
    <div className="py-5">
      <div className="w-screen overflow-auto no-scrollbar grid grid-rows-1 grid-flow-col justify-start scroll-pl-6 snap-x ">
        {destination.map((hello1) => (
          <div key={hello1.dest} className="pr-5 pl-5 pt-5 relative">
            <div
              style={{ "--image-url": `url(${hello1.url})` }}
              className={`static bg-cover bg-opacity-50 bg-[image:var(--image-url)] snap-center w-60 h-80 rounded-lg`}
            >
              <div className="absolute bottom-0 rounded-lg w-60 bg-gradient-to-b from-transparent to-black text-white text-4xl italic bold  font-sans text-center">
                {hello1.dest}
              </div>
              <div className="absolute top-0 rounded-lg w-60 bg-gradient-to-b from-black to-transparent text-white text-sm italic bold  font-sans text-center">
                20 May 24 - 27 May 24
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
