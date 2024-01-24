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
      <div className="mt-20 w-screen bg-fixed bg-cover bg-center bg-no-repeat relative bg-[url('/common/hero1.gif')] h-96">
        <div className="items-center h-full z-10">
          <Intro className=" w-screen"></Intro>
          <LeadGenNew></LeadGenNew>
        </div>
      </div>
      <div className="">
        <DestiNationExpertise className=""></DestiNationExpertise>
      </div>

      <HowItWorksTrial></HowItWorksTrial>
      <div className="w-screen lg:bg-contain md:bg-contain sm:bg-cover lg:bg-repeat md:bg-repeat sm:bg-no-repeat bg-[url('/common/paperback4.png')]">
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
