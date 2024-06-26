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
  return <div className="w-screen"></div>;
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"
