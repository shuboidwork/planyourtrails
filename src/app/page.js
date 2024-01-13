import DestiNationExpertise from "../../components/destinationexpertise";
import GroupTravel from "../../components/grouptravel";
import Intro, { GroupTravelIntro, Intro2 } from "../../components/intro";
import LeadGen from "../../components/leadgen";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <div>
      <div className="w-screen bg-cover bg-center relative bg-[url('/heroback.jpg')]">
        <div className="bg-gradient-to-r from-transparent to-black">
          <Navbar className=""></Navbar>
          <Intro className="py-2 w-screen"></Intro>
          <LeadGen></LeadGen>
          <div className="">
            <div className="bg-gradient-to-b from-transparent to-black ">
              <DestiNationExpertise className=""></DestiNationExpertise>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-cover bg-center relative bg-[url('/destinations/indonesia.jpg')]">
        <div className="bg-gradient-to-b from-transparent from-30% to-black to-70% ">
          <GroupTravelIntro className="bg-gradient-to-r from-transparent to-black"></GroupTravelIntro>
          <GroupTravel className=""></GroupTravel>
        </div>
      </div>
    </div>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"

//bg-[url('/destinations/indonesia.jpg')]
