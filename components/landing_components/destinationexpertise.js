import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    url: "/destinations/dubai.jpg",
  },
  {
    dest: "Dubai",
    url: "/destinations/dubai.jpg",
  },
];

export default function DestiNationExpertise() {
  return (
    <div className="py-5 w-screen ">
      <div className="">
        <div className="">
          <p className="text-center font-sanchez bold text-4xl text-gray-200 ">
            Travel like us
          </p>
        </div>
        <p className=" text-center text-base font-medium leading-7 text-gray-300 font-sanchez mt-2 ">
          to destinations where we can give you tailor made itinerary and help
          you with all bookings
        </p>
      </div>
      <div className="w-screen overflow-auto overflow-y-hidden no-scrollbar grid grid-rows-1 grid-flow-col justify-start snap-x ">
        {destination.map((hello1) => (
          <div className="pt-5">
            <div
              key={hello1.dest}
              className={`relative  hover:-translate-y-1 hover:scale-20 duration-300  rounded-5xl px-5`}
            >
              <div className="w-60 absolute top-2   bg-cover bg-center bg-[url('/common/Union.png')]">
                <div className="text-black text-4xl md:text-2xl  bold font-sanchez text-center">
                  {hello1.dest}
                </div>
              </div>
              <div
                style={{ "--image-url": `url(${hello1.url})` }}
                className={`static bg-cover bg-center bg-opacity-50 bg-[image:var(--image-url)] w-screen h-dvh snap-center `}
              >
                <Link
                  href="https://www.youtube.com/watch?v=3-FhDl6hB4s"
                  className="absolute top-0 right-0 m-10 animate-pulse h-5 w-5 z-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src="/elements/playbutton.png"></img>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
