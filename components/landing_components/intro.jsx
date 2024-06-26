import localFont from "next/font/local";

const myFont = localFont({ src: "../../src/app/Sirukota.ttf" });

export function GroupTravelIntro() {
  return (
    <div className="w-screen">
      <div className="grid grid-rows-6 gap-2 py-8 w-screen">
        <div className="w-screen row-span-6 text-center text-gray-500 font-merriweather text-sm md:text-2xl  font-bold ">
          wait, it does not end here
        </div>
        <div className="w-screen row-span-6 text-center text-white font-merriweather text-2xl md:text-5xl  font-bold ">
          We host group travel too
        </div>
      </div>
    </div>
  );
}

export function DestinationIntro({ destination_text }) {
  return (
    <div className="grid grid-rows-6 gap-2 py-8 w-screen">
      <div className="w-screen row-span-6 text-center text-black font-sans text-lg md:text-5xl  font-bold ">
        {destination_text}
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <div className={`text-center ${myFont.className}`}>
      <div className="">
        <p className="text-white text-5xl">your</p>
        <p className="text-white text-8xl ">amazing vacation</p>
        <p className="text-white text-5xl">starts here</p>
      </div>
    </div>
  );
}

export function GroupTripIntro() {
  return (
    <div className={`text-center ${myFont.className}`}>
      <div className="">
        <p className="text-white text-3xl">amazing</p>
        <p className="text-white text-6xl ">Group Trip</p>
        <p className="text-white text-3xl">start here</p>
      </div>
    </div>
  );
}
