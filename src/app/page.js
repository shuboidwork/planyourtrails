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

export default function Home() {
  return (
    <div className="w-screen">
      <div className="relative h-screen sm:h-screen md:h-96 lg:h-96 ">
        <div className="">
          <IntroCarousel></IntroCarousel>
        </div>
        <div className="absolute top-1/2 backdrop-blur-sm">
          <Intro className="w-screen"></Intro>
          <LeadGenNew></LeadGenNew>
        </div>
      </div>

      {/* <div className="">
        <DestiNationExpertise className=""></DestiNationExpertise>
      </div> */}

      <div className="">
        <HowItWorksTrial></HowItWorksTrial>
      </div>

      <div className="mt-20 w-screen bg-offwhite">
        <CreatorCredentials></CreatorCredentials>
      </div>
      <div className="h-screen w-screen">
        <GroupTravel></GroupTravel>
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"

//bg-[url('/destinations/indonesia.jpg')]
