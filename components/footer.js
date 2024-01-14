import LeadGen from "./leadgen";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center p-10">
      <div className="w-full">
        <div className="container mt-50 flex flex-col items-center gap-16">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="mb-2 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl text-black">
                Want to know more about us?
              </h2>
              <p className="text-base font-medium leading-7 text-black">
                We share informative content on our instagram and youtube
                channel. And helped around 8000 travelers with their travel
                planning.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
            <div className="flex items-start gap-4">
              <div className="flex flex-col  border-white border-10">
                <h3 className="mb-2 text-base font-bold leading-tight text-black">
                  Follow us on Instagram
                </h3>
                <div className="flex justify-center">
                  <img
                    src="/instagram.svg"
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
                    src="/youtube.svg"
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

          <LeadGen className="bg-white"></LeadGen>

          <div className="flex justify-start m-5">
            <div className="font-bold lg:text-xl  md:text-xl sm:text-sm text-black text-start p-2">
              Powered by
            </div>
            <img
              src="/instagram.svg"
              className="w-10 h-10 object-contain"
            ></img>
            <div className="">
              <Link href="/">
                <div className="font-bold lg:text-xl  md:text-xl sm:text-sm text-black text-start p-2">
                  Pastree
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
