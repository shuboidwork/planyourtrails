import LeadGen from "./leadgen";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center p-10 bg-cover relative bg-[url('/common/paperback4.png')] mx-auto ">
      <div className="w-full items-center">
        <div className="mt-10 pt-15 items-center ">
          <h2 className="mb-2 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl text-black text-center">
            Want to know more about us?
          </h2>
          <p className="text-base font-medium leading-7 text-black text-center">
            We share informative content on our instagram and youtube channel.
            And helped around 8000 travelers with their travel planning.
          </p>
        </div>
        <div className=" mt-20 flex w-full flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          <div className="flex items-start gap-4">
            <div className="flex flex-col  border-white border-10">
              <h3 className="mb-2 text-base font-bold leading-tight text-black">
                Follow us on Instagram
              </h3>
              <div className="flex justify-center">
                <img
                  src="/common/instagram.svg"
                  className="w-20 h-20 object-contain"
                ></img>
                <div>
                  <div className=" text-black md:text-lg sm:text-sm bold mt-3 ml-2">
                    Instagram
                  </div>
                  <div className="text-black ml-2">300k Subscribers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold leading-tight text-black">
                Follow us on Youtube
              </h3>
              <div className="flex justify-center">
                <img
                  src="/common/youtube.svg"
                  className="w-20 h-20 object-contain"
                ></img>
                <div>
                  <div className=" text-black md:text-lg sm:text-sm bold mt-3 ml-2">
                    Youtube
                  </div>
                  <div className="text-gray-700 ml-2">100k Subscribers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <LeadGen></LeadGen>

        <div className="flex justify-center items-center mt-10">
          <div className="font-bold lg:text-xl  md:text-xl sm:text-sm text-black text-start p-2">
            Powered by
          </div>
          <img
            src="/common/instagram.svg"
            className="w-10 h-10 object-contain"
          ></img>

          <Link
            className="font-bold lg:text-xl  md:text-xl sm:text-sm text-black text-start p-2"
            href="/"
          >
            Pastree
          </Link>
        </div>
      </div>
    </div>
  );
}
