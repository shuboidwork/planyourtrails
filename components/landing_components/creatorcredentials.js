"use client";
import { motion, useTransform, useScroll } from "framer-motion";
export default function CreatorCredentials() {
  return (
    <div>
      <div className="w-screen mx-auto py-2">
        {/* <div className="px-5 ">
        <div className="flex">
          <p className="text-start font-merriweather bold text-4xl text-oceanblue ">
            why choose us
          </p>
        </div>
        <p className="text-base font-medium leading-7 text-gray-600 font-merriweather mt-2 ">
          This is the description regarding the store owner and their journey so
          far in travel space. This will include how many countries they have
          travelled and how many destinations they are expert in.
        </p>
      </div> */}
        <div className="mt-10">
          <p className="text-center font-merriweather bold text-3xl text-oceanblue ">
            Why should you plan your vacation through us?
          </p>
          <p className="text-center font-medium  text-black font-merriweather mt-2 ">
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
