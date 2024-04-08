"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../src/app/Sirukota.ttf" });

export default function CreatorCredentials() {
  return (
    <div>
      <div className="w-screen mx-auto py-2">
        <div className="mt-10">
          <p className="text-center font-merriweather bold text-3xl text-oceanblue ">
            Why should you plan your vacation through us?
          </p>
          <p className="text-center font-medium  text-black font-merriweather mt-3 px-3 ">
            We make sure the itinerary is experential and suitable for your
            travel type. We add offbeat places which are not usually visited by
            people. And to add we give exclusive travel deals in our packages
          </p>
        </div>
        <div className="mt-10 mx-auto">
          <div className="col-span-1 flex justify-center my-auto">
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/credentials/cred1.jpg"
              className="w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl"
            ></img>
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/credentials/cred2.jpg"
              className="w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl "
            ></img>
          </div>
        </div>
      </div>
      <div className=" my-5 items-center pl-2 pr-2 mt-30 w-5/6 lg:w-1/2 md:w-1/2 mx-auto ">
        <div className="h-48 flex items-start gap-4   p-3 my-3">
          <div className="flex flex-col items-center">
            <img
              className="w-10 h-10 mb-3  animate-pulse"
              src={"/elements/passport.png"}
            ></img>

            <h3 className="mb-2 text-xl text-oceanblue font-merriweather">
              Travel like us
            </h3>
            <p className="text-obtext font-merriweather font-sm text-center">
              If you like the way we travel, we will suggest the exact same
              stays, activities and experiences for you as well
            </p>
          </div>
        </div>

        <div className=" h-48 flex items-start gap-4  p-3 my-3">
          <div className="flex flex-col items-center">
            <img
              className="w-10 h-10 mb-3  animate-pulse"
              src={"/elements/rating.png"}
            ></img>

            <h3 className="mb-2 text-xl text-oceanblue font-merriweather">
              Best Possible Experience
            </h3>
            <p className="text-obtext font-merriweather font-sm text-center">
              From our travel eperience we know how to best travel and enjoy
              within a particular budget
            </p>
          </div>
        </div>
        <div className="h-48 flex items-start gap-4   p-3 my-3">
          <div className="flex flex-col items-center">
            <img
              className="w-10 h-10 mb-3  animate-pulse"
              src={"/elements/money.png"}
            ></img>

            <h3 className="mb-2 text-xl text-oceanblue font-merriweather">
              Save Money & Time
            </h3>
            <p className="text-obtext font-merriweather font-sm text-center">
              You can relax, since we will be doing all the planning to get you
              the best stays, activities within your budget
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreatorCredentialsGroup() {
  return (
    <div>
      <div className="w-screen mx-auto py-2">
        <div className="mt-10">
          <p className="text-center font-merriweather bold text-3xl text-oceanblue ">
            Why should you join us on group trip?
          </p>
          <p className="text-center font-medium  text-black font-merriweather mt-3 px-3 ">
            We create custom itineraries for group trips with unique and offbeat
            destinations, along with exclusive travel deals for a memorable and
            cost-effective experience.
          </p>
        </div>
        <div className="mt-10 mx-auto">
          <div className="col-span-1 flex justify-center my-auto">
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/group_trip1.jpeg"
              className="w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl"
            ></img>
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/group_trip2.jpeg"
              className="w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatsNewSection() {
  return (
    <div>
      <div className="w-screen mx-auto py-2">
        <div className="mt-10">
          <p
            className={`text-center ${myFont.className} bold text-3xl text-oceanblue animate-pulse`}
          >
            What&apos;s New?
          </p>
        </div>
        <div className="mx-5">
          <div className="col-span-1 flex justify-center my-auto">
            <div className="p-3 rounded-md">
              <a href="https://www.google.com/maps/d/u/0/viewer?mid=1lkDgvm5VmnKZFK557Ee3LTLkgVJE3eY&ll=0%2C0&z=9">
                <img
                  src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/bali_recommendations.png"
                  className="w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl"
                ></img>
              </a>
              <div className="text-center font-merriweather  text-oceanblue text-sm">
                Bali Recommendations Map
              </div>
            </div>
            <div className="p-3">
              <a href="/group_trip/azerbaijanJune6th">
                <img
                  src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/recommendations/group+trip+6th+June.png"
                  className="w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl "
                ></img>
              </a>
              <div className="text-center font-merriweather  text-oceanblue  text-sm">
                Amazing group trip
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
