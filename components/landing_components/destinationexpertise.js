import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[350px] overflow-hidden bg-neutral-200 rounded-md"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 "
      ></div>
      <div className="absolute inset-x-0 bottom-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-b from-white/20 to-white/0 p-8 text-3xl font-sanchez uppercase text-white backdrop-blur-sm">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const destination = [
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/egypt.jpg",
    title: "Egypt 🇪🇬",
    id: 1,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/vietnam.jpg",
    title: "Vietnam",
    id: 2,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/philippines2.jpg",
    title: "Philippines",
    id: 6,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/thailand.jpg",
    title: "Thailand",
    id: 3,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/kashmir.jpg",
    title: "Kashmir",
    id: 5,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/philippines.jpg",
    title: "Philippines",
    id: 6,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/rajasthan.jpg",
    title: "Rajasthan",
    id: 7,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/thailand2.jpg",
    title: "Thailand",
    id: 4,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/kashmir2.jpg",
    title: "Kashmir",
    id: 8,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/destinations/himachal.jpg",
    title: "Himachal",
    id: 9,
  },
];

export default function DestiNationExpertise() {
  return (
    <div className="py-5 w-screen h-full ">
      <div className="">
        <div className="flex h-48 items-center">
          <p className="text-center font-sanchez bold text-4xl text-oceanblue">
            Let us plan your dream vacation for you
          </p>
          <p className="text-center font-medium font-sanchez text-2xl mt-2 ">
            we our making travel planning easy through our travel experience to
            make your dream trip come true
          </p>
        </div>
        <div className="w-screen overflow-auto overflow-y-hidden no-scrollbar grid grid-rows-1 grid-flow-col justify-start snap-x gap-2 ">
          {/* {destination.map((hello1) => (
          <div key={hello1.dest} className="pt-5">
            <div
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
        ))} */}
          {destination.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
