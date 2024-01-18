import LeadGen from "../../../components/common_components/leadgen";
import Footer from "../../../components/common_components/footer";
import Intro from "../../../components/landing_components/intro";
import { DestinationIntro } from "../../../components/landing_components/intro";
import Image from "next/image";

const description =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const activities = [
  {
    id: 1,
    dest: "Tanah Lot Temple",
    media_url: "/common/travel2.jpg",
  },
  {
    id: 2,
    dest: "Nusa Penida",
    media_url: "/common/travel1.jpg",
  },
  {
    id: 3,
    dest: "Paragliding",
    media_url: "/destinations/bir.jpg",
  },
  {
    id: 4,
    dest: "Oasis Restaurant",
    media_url: "/common/travel3.jpg",
  },
];

export default function destination() {
  return (
    <div className="w-screen bg-cover bg-center relative bg-[url('/common/travel3.jpg')] my-auto">
      <div className="w-screen pt-10">
        <div className="">
          <DestinationIntro destination_text="Our Top Picks in Bali"></DestinationIntro>
          <LeadGen></LeadGen>
        </div>
      </div>
      <div className="">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="md:flex lg:flex rounded-2xl justify-center items-center mx-auto w-2/3 mt-10  grid-cols-3 bg-white shadow-2xl"
          >
            <div
              style={{ "--image-url": `url(${activity.media_url})` }}
              className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-90 h-80 rounded-lg col-span-2 order-${
                activity.id % 2 === 0 ? 1 : 2
              }`}
            >
              <div
                className={`mb-2 bg-cover bg-center bg-[url('/common/Union.png')] `}
              >
                <div className="rounded-lg w-60 bg-gradient-to-b from-transparent text-black text-2xl md:text-2xl  bold font-denton text-center">
                  {activity.dest}
                </div>
              </div>
            </div>
            <div className="m-1 md:pt-20 md:pr-20 sm:p-2 lg:pt-20 lg:pr-20 z-30 col-span-1">
              <p className="text-black text-center md:text-lg lg:text-lg sm:text-sm font-roboto p-2">
                This is the description regarding the store owner and their
                journey so far in travel space. This will include how many
                countries they have travelled and how many destinations they are
                expert in.
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer></Footer>
    </div>
  );
}
