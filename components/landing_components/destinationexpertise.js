import React from "react";
import Image from "next/image";
import Link from "next/link";

function randangle() {
  const arr_angle = [2, 3, 6, 12, 45];
  const val = Math.floor(Math.random() * arr_angle.length);
  const arr_direction = ["rotate-", "-rotate-"];
  const dir = Math.floor(Math.random() * arr_direction.length);

  return arr_direction[dir] + arr_angle[val];
}

const destination = [
  {
    dest: "Bali",
    url: "/destinations/bali.jpg",
    r_class: randangle(),
  },
  {
    dest: "Singapore",
    url: "/destinations/singapore.jpg",
    r_class: randangle(),
  },
  {
    dest: "Thailand",
    url: "/destinations/thailand.jpg",
    r_class: randangle(),
  },
  {
    dest: "Coorg",
    url: "/destinations/coorg.jpg",
    r_class: randangle(),
  },
  {
    dest: "Indonesia",
    url: "/destinations/indonesia.jpg",
    r_class: randangle(),
  },
  {
    dest: "Bir",
    url: "/destinations/dubai.jpg",
    r_class: randangle(),
  },
  {
    dest: "Dubai",
    url: "/destinations/dubai.jpg",
    r_class: randangle(),
  },
];

export default function DestiNationExpertise() {
  return (
    <div className="py-5 w-90 align-middle">
      <div className="px-5 text-2xl font-sans bold text-center text-gray-200">
        travel like us to destinations we have traveled
      </div>
      <div className="w-screen overflow-auto no-scrollbar grid grid-rows-1 grid-flow-col justify-start scroll-pl-6 snap-x ">
        {destination.map((hello1) => (
          <Link key={hello1.dest} href={"/destination"}>
            <div
              key={hello1.dest}
              className={`pr-5 pl-5 pt-5 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-20 duration-300`}
            >
              <div
                style={{ "--image-url": `url(${hello1.url})` }}
                className={`static bg-cover bg-opacity-50 bg-[image:var(--image-url)] snap-center w-60 h-80 rounded-2xl`}
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
