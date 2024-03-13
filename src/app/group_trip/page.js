"use client";

import React, { useRef } from "react";
import {
  GroupTravelIntro,
  GroupTripIntro,
} from "../../../components/landing_components/intro";
import CreatorCredentials, {
  CreatorCredentialsGroup,
} from "../../../components/landing_components/creatorcredentials";
import { LeadGenGroupTripButton } from "../../../components/common_components/leadgen";
import Footer from "../../../components/common_components/footer";
import FooterGroupTrip from "../../../components/common_components/footer_group";

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
          <GroupTripIntro className="w-screen "></GroupTripIntro>
          <LeadGenGroupTripButton
            scrollCallback={scrollToBottom}
          ></LeadGenGroupTripButton>
        </div>
      </div>

      <div className="mt-20">
        <CreatorCredentialsGroup></CreatorCredentialsGroup>
      </div>

      <div ref={bottomRef} className="mt-20">
        <FooterGroupTrip></FooterGroupTrip>
      </div>
    </div>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"
