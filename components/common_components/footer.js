import Link from "next/link";
import { LeadGenNew } from "./leadgen";
import LeadGenForm from "../landing_components/leadgenform";

export default function Footer() {
  return (
    <div className="flex justify-center mx-auto ">
      <div className="w-full items-center">
        <div className="items-center ">
          <div className="">
            {/* <div className="relative h-96 m-5 overflow-hidden max-w-full bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src={`https://www.youtube.com/embed/2zqdkABA5TU?si=uQKCTSYLjOePFxqL`}
              ></iframe>
            </div> */}
            <LeadGenForm></LeadGenForm>
          </div>
        </div>
      </div>
    </div>
  );
}
