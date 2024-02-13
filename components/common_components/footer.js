import Link from "next/link";
import { LeadGenNew } from "./leadgen";
import LeadGenForm from "../landing_components/leadgenform";

export default function Footer() {
  return (
    <div className="flex justify-center bg-gradient-to-b from-white to-oceanbluelight mx-auto ">
      <div className="w-full items-center">
        <div className="mt-10 pt-15 items-center ">
          <h2 className="mb-2 text-3xl leading-tight text-oceanblue lg:text-4xl text-center font-sanchez">
            Want us to plan your next trip?
          </h2>
          <p className="text-base font-medium leading-7 text-obtext text-center font-sanchez">
            We share informative content on our instagram and youtube channel.
            And helped around 8000 travelers with their travel planning.
          </p>
          <div className="mt-15">
            <LeadGenForm></LeadGenForm>
          </div>
        </div>
        <h3 className="text-center text-obtext text-lg"> Follow us on </h3>
        <div className="flex w-full items-center justify-center gap-7">
          <div>
            <img
              src="/elements/instagram.png"
              className="w-10 h-10 object-contain "
            ></img>
          </div>
          <div>
            <img
              src="/elements/youtube.png"
              className="w-12 h-12 object-contain"
            ></img>
          </div>
        </div>

        <div className="flex justify-center items-center my-10">
          <div className="font-bold lg:text-xl  md:text-xl sm:text-sm text-obtext text-start p-2 font-sanchez">
            Powered by
          </div>
          <img
            src="/elements/cupcake.png"
            className="w-10 h-10 object-contain"
          ></img>

          <Link
            className="font-bold lg:text-xl  md:text-xl sm:text-sm text-obtext text-start p-2 font-sanchez"
            href="/"
          >
            Pastree
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FooterGroup() {
  return (
    <div className="flex justify-center bg-offwhite mx-auto ">
      <div className="w-full items-center">
        <div className="mt-10 pt-15 items-center ">
          <h2 className="mb-2 text-3xl leading-tight text-dark-grey-900 lg:text-4xl text-black text-center font-sanchez">
            Want to join us on our next group trip?
          </h2>
          <p className="text-base font-medium leading-7 text-black text-center font-sanchez">
            Share your information with us, we will reach out to you once we
            have next trip planned.
          </p>
          <div className="mt-15">
            <LeadGenNew></LeadGenNew>
          </div>
        </div>
        <div className=" mt-20 flex w-full flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          <div className="flex items-start gap-4">
            <div className="flex flex-col  border-white border-10">
              <h3 className="mb-2 text-base font-bold leading-tight text-black font-sanchez">
                Follow us on Instagram
              </h3>
              <div className="flex justify-center">
                <img
                  src="/common/instagram.svg"
                  className="w-20 h-20 object-contain"
                ></img>
                <div>
                  <div className=" text-black md:text-lg sm:text-sm bold mt-3 ml-2 font-sanchez">
                    Instagram
                  </div>
                  <div className="text-black ml-2 font-sanchez">
                    300k Subscribers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold leading-tight text-black font-sanchez">
                Follow us on Youtube
              </h3>
              <div className="flex justify-center">
                <img
                  src="/common/youtube.svg"
                  className="w-20 h-20 object-contain"
                ></img>
                <div>
                  <div className=" text-black md:text-lg sm:text-sm bold mt-3 ml-2 font-sanchez">
                    Youtube
                  </div>
                  <div className="text-gray-700 ml-2 font-sanchez">
                    100k Subscribers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="font-bold lg:text-xl  md:text-xl sm:text-sm text-black text-start p-2 font-sanchez">
            Powered by
          </div>
          <img
            src="/common/instagram.svg"
            className="w-10 h-10 object-contain"
          ></img>

          <Link
            className="font-bold lg:text-xl  md:text-xl sm:text-sm text-black text-start p-2 font-sanchez"
            href="/"
          >
            Pastree
          </Link>
        </div>
      </div>
    </div>
  );
}
