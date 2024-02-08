import CreatorCredentials from "../../components/landing_components/creatorcredentials";
import DestiNationExpertise from "../../components/landing_components/destinationexpertise";
import GroupTravel from "../../components/landing_components/grouptravel";
import HowItWorks, {
  HowItWorksTrial,
} from "../../components/common_components/howitworks";
import Intro, {
  GroupTravelIntro,
} from "../../components/landing_components/intro";
import LeadGen, {
  LeadGenNew,
} from "../../components/common_components/leadgen";
import Footer from "../../components/common_components/footer";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="relative bg-fixed bg-center bg-opacity-10 bg-[url('/destinations/dubai.jpg')] h-screen">
        <div className="h-screen absolute top-1/3">
          <Intro className=" w-screen"></Intro>
          <LeadGenNew></LeadGenNew>
        </div>
      </div>
      <div className="h-screen">
        <DestiNationExpertise className=""></DestiNationExpertise>
      </div>

      <HowItWorksTrial></HowItWorksTrial>
      <div className="w-screen bg-offwhite">
        <CreatorCredentials></CreatorCredentials>
      </div>
      <div className="py-10">
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
