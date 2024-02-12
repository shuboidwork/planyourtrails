import CreatorCredentials from "../../components/landing_components/creatorcredentials";
import DestiNationExpertise from "../../components/landing_components/destinationexpertise";
import GroupTravel from "../../components/landing_components/grouptravel";
import HowItWorks, {
  HowItWorksTrial,
} from "../../components/common_components/howitworks";
import Intro, {
  GroupTravelIntro,
  IntroCarousel,
} from "../../components/landing_components/intro";
import LeadGen, {
  LeadGenNew,
} from "../../components/common_components/leadgen";
import Footer from "../../components/common_components/footer";
import HorizontalDestinations from "../../components/landing_components/destinationexpertisenew";
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(
  () => import("../../components/landing_components/introcarousel"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="w-screen">
      <div className=" relative">
        <img
          className="w-full object-cover h-screen sm:h-screen md:h-96 lg:h-96"
          src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/himanisagar.gif"
        ></img>
        {/* <div className="">
          <DynamicComponent></DynamicComponent>
        </div> */}

        <div className="absolute  inset-x-0 bottom-12">
          <Intro className="w-screen "></Intro>
          <LeadGenNew></LeadGenNew>
        </div>
      </div>
      {/* <div>
        <HorizontalDestinations></HorizontalDestinations>
      </div> */}
      <div className="h-screen bg-scroll">
        <DestiNationExpertise className=""></DestiNationExpertise>
      </div>

      <div className="">
        <HowItWorksTrial></HowItWorksTrial>
      </div>

      <div className="mt-20">
        <CreatorCredentials></CreatorCredentials>
      </div>
      {/* <div className="h-screen w-screen">
        <GroupTravel></GroupTravel>
      </div> */}

      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"
