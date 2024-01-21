import CreatorCredentials from "../../components/landing_components/creatorcredentials";
import DestiNationExpertise from "../../components/landing_components/destinationexpertise";
import GroupTravel from "../../components/landing_components/grouptravel";
import HowItWorks from "../../components/common_components/howitworks";
import Intro, {
  GroupTravelIntro,
} from "../../components/landing_components/intro";
import LeadGen from "../../components/common_components/leadgen";
import Footer from "../../components/common_components/footer";

export default function Home() {
  return (
    <div>
      <div className="w-screen bg-cover bg-center relative bg-[url('/common/heroback.gif')] mb-5">
        <div className="bg-gradient-to-b from-black via-transparent to-black">
          <Intro className="py-2 w-screen"></Intro>
          <LeadGen></LeadGen>
          <div className="">
            <div className="bg-gradient-to-b from-transparent to-black ">
              <DestiNationExpertise className=""></DestiNationExpertise>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-cover  relative bg-[url('/common/paperback4.png')]">
        <CreatorCredentials></CreatorCredentials>
        <HowItWorks></HowItWorks>
      </div>

      <div className=" bg-cover bg-center relative bg-[url('/destinations/indonesia.jpg')] ">
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
