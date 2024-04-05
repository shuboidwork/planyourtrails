"use client";

import React, { useRef } from "react";
import {
  GroupTravelIntro,
  GroupTripIntro,
} from "../../../../components/landing_components/intro";
import CreatorCredentials, {
  CreatorCredentialsGroup,
} from "../../../../components/landing_components/creatorcredentials";
import { LeadGenGroupTripButton } from "../../../../components/common_components/leadgen";
import Footer from "../../../../components/common_components/footer";
import FooterGroupTrip from "../../../../components/common_components/footer_group";

export default function Home() {
  const bottomRef = useRef();
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="w-screen">
      <div
        className="relative w-full mx-auto"
        style={{ paddingTop: "141.4286%" }}
      >
        <div
          className="absolute inset-0 shadow-lg rounded-lg"
          style={{ boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)" }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.canva.com/design/DAGA9t8ehPo/KOApKGImFudLS__1mIYcyQ/view?embed"
            allowFullScreen
          />
        </div>
      </div>
      <div className="text-center">
        Please swipe right for more detailed itinerary and costing, you can fill
        the form if you are interested.
      </div>
      <LeadGenGroupTripButton
        scrollCallback={scrollToBottom}
      ></LeadGenGroupTripButton>

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
