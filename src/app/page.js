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
          src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/new_carousel_hs_large.gif"
        ></img>
        <img
          className="w-full object-cover h-screen lg:hidden md:hidden"
          src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/new_carousel_hs.gif"
        ></img>

        <div className="absolute  inset-x-0 bottom-20">
          <Intro className="w-screen "></Intro>
          <LeadGenNew scrollCallback={scrollToBottom}></LeadGenNew>
        </div>
      </div>
      {/* <div>
        <HorizontalDestinations></HorizontalDestinations>
      </div> */}
      <div className="h-screen bg-scroll">
        <DestiNationExpertise className=""></DestiNationExpertise>
      </div>

      <div className="mt-10 lg:mt-36 md:mt-36 sm:mt-10 ">
        <HowItWorksTrial></HowItWorksTrial>
      </div>
      <div className="mt-20">
        <WhatsNewSection></WhatsNewSection>
      </div>
      <div className="mt-20">
        <CreatorCredentials></CreatorCredentials>
      </div>
      {/* <div className="h-screen w-screen">
        <GroupTravel></GroupTravel>
      </div> */}

      <div ref={bottomRef} className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"
