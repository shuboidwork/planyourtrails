"use client";
import CreatorCredentials, {
  WhatsNewSection,
} from "../../components/landing_components/creatorcredentials";
import DestiNationExpertise from "../../components/landing_components/destinationexpertise";
import HowItWorks, {
  HowItWorksTrial,
} from "../../components/common_components/howitworks";
import Intro from "../../components/landing_components/intro";
import LeadGen, {
  LeadGenNew,
} from "../../components/common_components/leadgen";
import Footer from "../../components/common_components/footer";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
const DynamicComponent = dynamic(
  () => import("../../components/landing_components/introcarousel"),
  {
    ssr: false,
  }
);
import localFont from "next/font/local";
const myFont = localFont({ src: "../../src/app/Sirukota.ttf" });
import Link from "next/link";

export default function Home() {
  const bottomRef = useRef();
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="w-screen">
      <div className=" relative">
        <img
          className="w-full object-cover h-screen hidden lg:block md:block"
          src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/amsterdam.jpg"
        ></img>
        <img
          className="w-full object-cover h-screen lg:hidden md:hidden"
          src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/destinations/amsterdam.jpg"
        ></img>

        <div className="absolute  inset-x-0 top-7">
          <Intro className="w-screen "></Intro>
        </div>
        <div className="absolute  inset-x-0 bottom-2">
          <LeadGenNew scrollCallback={scrollToBottom}></LeadGenNew>
        </div>
      </div>
      <div ref={bottomRef} className="mt-5">
        <div className="h-48 items-center px-2">
          <div className="text-center font-medium font-merriweather mt-3 ">
            Hello! I am <div className="font-abril text-xl pb-2">Chirag</div>a
            avid traveler who has traveled to 20+ countries building amazing
            travel mememories and expertise. I can help you with itinerary,
            bookings and also full fledged packages customised for you.
          </div>
        </div>
        <Footer></Footer>
      </div>

      <div className="h-screen bg-scroll">
        <DestiNationExpertise className=""></DestiNationExpertise>
      </div>

      <div className="mt-10 lg:mt-36 md:mt-36 sm:mt-10 ">
        <HowItWorksTrial></HowItWorksTrial>
      </div>
      {/* <div className="mt-20">
        <WhatsNewSection></WhatsNewSection>
      </div> */}
      <div className="mt-20">
        <CreatorCredentials></CreatorCredentials>
      </div>

      <h3 className="text-center text-obtext text-lg"> Follow me on </h3>
      <div className="flex w-full items-center justify-center gap-7">
        <div>
          <Link href={"https://www.instagram.com/travelerchirag/"}>
            <img
              src="/elements/instagram.png"
              className="w-10 h-10 object-contain "
            ></img>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center my-10">
        <div className="font-bold lg:text-xl  md:text-xl sm:text-sm text-obtext text-start p-2 font-merriweather">
          All rights reserved by
        </div>
        {/* <img
            src="/elements/cupcake.png"
            className="w-10 h-10 object-contain"
          ></img> */}

        <Link
          className="font-bold lg:text-xl  md:text-xl sm:text-sm text-obtext text-start p-2 font-merriweather"
          href="/"
        >
          Planyourtrails
        </Link>
      </div>
    </div>
  );
}
