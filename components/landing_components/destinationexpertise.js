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
    <div className="py-5 w-screen">
      <div className="px-5 ">
        <p className="text-start font-roboto bold text-4xl text-gray-200 ">
          travel like us to
        </p>
        <hr className="border border-white w-2/3 text-center"></hr>
        <p className="text-end animate-pulse text-white text-4xl">&rarr;</p>
      </div>
      <div className="w-svw p-5 overflow-auto overflow-y-hidden no-scrollbar grid grid-rows-1 grid-flow-col justify-start scroll-pl-6 snap-x ">
        {destination.map((hello1) => (
          <Link key={hello1.dest} href={"/destination"}>
            <div
              key={hello1.dest}
              className={`mr-3 mt-5 relative  hover:-translate-y-1 hover:scale-20 duration-300  rounded-2xl w-80 h-96 `}
            >
              <div
                style={{ "--image-url": `url(${hello1.url})` }}
                className={`static bg-cover bg-center bg-opacity-50 bg-[image:var(--image-url)] w-80 h-96 snap-center rounded-2xl `}
              >
                <Link
                  href="https://www.youtube.com/watch?v=3-FhDl6hB4s"
                  className="absolute top-0 right-0 m-10 animate-pulse h-5 w-5 z-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/elements/playbutton.png"></img>
                </Link>
                <div className="w-60 absolute bottom-2   bg-cover bg-center bg-[url('/common/Union.png')]">
                  <div className="text-black text-2xl md:text-2xl  bold font-roboto text-center">
                    {hello1.dest}
                    <div className=" text-sm md:text-sm  font-roboto text-center text-gray-700">
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
