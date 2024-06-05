import Link from "next/link";
import { LeadGenNew } from "./leadgen";
import LeadGenForm from "../landing_components/leadgenform";

export default function Footer() {
  return (
    <div className="flex justify-center mx-auto ">
      <div className="w-full items-center">
        <div className="mt-10 pt-15 items-center ">
          <h2 className="mb-2 text-3xl leading-tight text-oceanblue lg:text-4xl text-center font-merriweather">
            Want me to plan your next trip?
          </h2>
          <p className="text-base font-medium leading-7 text-obtext text-center font-merriweather">
            Here is the quick video explaing the process of how I plan your
            vacation
          </p>

          <div className="mt-15">
            <div className="relative h-96 m-5 overflow-hidden max-w-full bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src={`https://www.youtube.com/embed/2zqdkABA5TU?si=uQKCTSYLjOePFxqL`}
              ></iframe>
            </div>
            <LeadGenForm></LeadGenForm>
          </div>
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
    </div>
  );
}
