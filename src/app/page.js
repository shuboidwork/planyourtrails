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
    <div>
      <div className="mt-20 w-screen bg-fixed bg-cover bg-center bg-no-repeat relative bg-[url('/common/heroback.png')] h-96">
        <div className="bg-cover bg-gradient-to-b from-black via-transparent to-black items-center align-middle h-full">
          <Intro className="py-2 w-screen"></Intro>
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

      <div className=" bg-cover bg-center relative bg-[url('/common/travel2.jpg')] ">
        <div className="bg-gradient-to-b from-black via-transparent to-black to-70% ">
          <GroupTravelIntro></GroupTravelIntro>
          <GroupTravel className=""></GroupTravel>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"

//bg-[url('/destinations/indonesia.jpg')]
