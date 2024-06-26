"use client";

import React, { useRef } from "react";
import ReactPDF from "@react-pdf/renderer";

export default function Home() {
  const bottomRef = useRef();
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="w-screen">
      <object
        data={
          "https://pastreeadmin.s3.ap-south-1.amazonaws.com/travelerchirag/Thailand+Group+Trip+PYT.pdf"
        }
        type="application/pdf"
        className="w-full h-full md:w-3/4 md:h-3/4 lg:w-2/3 lg:h-2/3"
        aria-label="PDF Viewer"
      ></object>
    </div>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"
