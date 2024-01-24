import Image from "next/image";
export default function CreatorCredentials() {
  return (
    <div className="w-screen mx-auto py-20">
      <div className="px-5 ">
        <div className="flex">
          <p className="text-start font-roboto bold text-4xl text-black ">
            about us
          </p>
        </div>
        <p className="text-base font-medium leading-7 text-gray-600 font-roboto mt-2 ">
          This is the description regarding the store owner and their journey so
          far in travel space. This will include how many countries they have
          travelled and how many destinations they are expert in.
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 md:grid-rows-1 lg:grid-row-1  sm:grid-rows-2">
        <div className="col-span-1 flex justify-center my-auto">
          <img
            src="/common/creatorcred.jpg"
            className="-rotate-12 w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl"
          ></img>
          <img
            src="/destinations/thailand.jpg"
            className="rotate-12 w-30 h-60 object-contain items-center justify-center  m-1 rounded-xl "
          ></img>
        </div>
        <div className="col-span-1 my-auto mt-5">
          <div className="text-black text-center  mt-20 bold text-2xl animate-pulse font-roboto">
            Checkout our channels
          </div>
          <div className="">
            <div className="flex justify-center">
              <img
                src="/common/instagram.svg"
                className="w-20 h-20 object-contain"
              ></img>
              <div>
                <div className=" text-black md:text-lg sm:text-sm bold mt-3 ml-2">
                  Instagram
                </div>
                <div className="text-gray-700 ml-2">300k Subscribers</div>
              </div>
            </div>
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

        <div className="sm:mt-20">
          <div className="text-black bold text-xl font-roboto text-center">
            Collected Travel Magnets from 12+ countries
          </div>
          <img
            src="/common/travelmagnet.png"
            className="w-30 h-60 object-contain items-center justify-center "
          ></img>
        </div>
      </div>
    </div>
  );
}
