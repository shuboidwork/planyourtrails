"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalDestinations = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-95%"]);

  return (
    <div>
      <section
        ref={targetRef}
        className="relative h-[300vh] bg-gradient-to-b from-white via-oceanblue to-white"
      >
        <div className="flex h-48 items-center justify-center">
          <div className="">
            <p className="text-center font-sanchez bold text-4xl text-oceanblue">
              Travel like us
            </p>
            <p className="text-center font-medium font-sanchez text-2xl mt-2 ">
              to destiantions we know the best
            </p>
          </div>
        </div>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

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
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-x-0 bottom-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-b from-white/20 to-white/0 p-8 text-3xl font-sanchez uppercase text-white backdrop-blur-sm">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalDestinations;

const cards = [
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
