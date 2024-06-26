import Link from "next/link";
import { LeadGenGroup, LeadGenNew } from "./leadgen";
import LeadGenForm from "../landing_components/leadgenform";
import LeadGenGroupForm from "../landing_components/leadgengroupform";

export default function FooterGroupTrip() {
  return (
    <div className="flex justify-center bg-gradient-to-b from-white to-oceanbluelight mx-auto ">
      <div className="w-full items-center">
        <div className="mt-10 pt-15 items-center ">
          <h2 className="mb-2 text-3xl leading-tight text-oceanblue lg:text-4xl text-center font-merriweather">
            Want to join us on memorable journey?
          </h2>
          <p className="text-base font-medium leading-7 text-obtext text-center font-merriweather">
            Register your interest and we will reach out to you soon.
          </p>
          <div className="mt-15">
            <LeadGenGroupForm></LeadGenGroupForm>
          </div>
        </div>
        <h3 className="text-center text-obtext text-lg"> Follow us on </h3>
        <div className="flex w-full items-center justify-center gap-7">
          <div>
            <Link
              href={
                "https://www.instagram.com/wanderlust_himani?igsh=MWZ6ZnlkeGNra2MzNA=="
              }
            >
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
