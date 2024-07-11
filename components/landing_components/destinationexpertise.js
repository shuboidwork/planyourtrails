import React from "react";

import localFont from "next/font/local";

const myFont = localFont({ src: "../../src/app/Sirukota.ttf" });
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
        <div
          className={`bg-gradient-to-b from-white/20 to-white/0 p-8 text-3xl ${myFont.className} uppercase text-white backdrop-blur-sm`}
        >
          {card.title}
        </div>
      </div>
    </div>
  );
};

const destination = [
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/switzerland.jpg",
    title: "Switzerland",
    id: 1,
  },

  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/paris.JPG",
    title: "Paris",
    id: 2,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/germany.JPG",
    title: "Germany",
    id: 3,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/belgium.jpg",
    title: "Belgium",
    id: 4,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/turkey.jpg",
    title: "Turkey",
    id: 5,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/Bali.jpeg",
    title: "Bali",
    id: 6,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/thailand.PNG",
    title: "Thailand",
    id: 7,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/amsterdam.jpg",
    title: "Amsterdam",
    id: 8,
  },
  {
    url: "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/Himachal.jpg",
    title: "Himachal",
    id: 8,
  },
];

export default function DestiNationExpertise() {
  return (
    <div className="mt-10 w-screen h-full ">
      {/* <InteractiveMarquee>
        {destination.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </InteractiveMarquee> */}
      <div className="w-screen overflow-auto overflow-y-hidden no-scrollbar grid grid-rows-1 grid-flow-col justify-start snap-x gap-2 ">
        {/* {destination.map((hello1) => (
          <div key={hello1.dest} className="pt-5">
            <div
              className={`relative  hover:-translate-y-1 hover:scale-20 duration-300  rounded-5xl px-5`}
            >
              <div className="w-60 absolute top-2   bg-cover bg-center bg-[url('/common/Union.png')]">
                <div className="text-black text-4xl md:text-2xl  bold font-merriweather text-center">
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
      <div className="flex justify-center mt-10">
        <div className="sm:rotate-0 md:rotate-0 lg:rotate-0 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
          >
            <g clipPath="url(#clip0_3346_6663)">
              <path
                d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                fill="#68769F"
              />
            </g>
            <defs>
              <clipPath id="clip0_3346_6663">
                <rect
                  width="42"
                  height="42"
                  fill="white"
                  transform="translate(0.666748)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="sm:rotate-90 md:rotate-0 lg:rotate-0 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="42"
            viewBox="0 0 43 42"
            fill="none"
          >
            <g clipPath="url(#clip0_3346_6663)">
              <path
                d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                fill="#68769F"
              />
            </g>
            <defs>
              <clipPath id="clip0_3346_6663">
                <rect
                  width="42"
                  height="42"
                  fill="white"
                  transform="translate(0.666748)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
