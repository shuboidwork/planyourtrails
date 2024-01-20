import LeadGen, {
  LeadGenGroup,
} from "../../../components/common_components/leadgen";
import Footer from "../../../components/common_components/footer";
import { DestinationIntro } from "../../../components/landing_components/intro";

const description =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const activities = [
  {
    id: 1,
    dest: "Tanah Lot Temple",
    media_url: "/common/travel1.jpg",
  },
  {
    id: 2,
    dest: "Nusa Penida",
    media_url: "/common/travel2.jpg",
  },
  {
    id: 3,
    dest: "Paragliding",
    media_url: "/common/travel3.jpg",
  },
  {
    id: 4,
    dest: "Oasis Restaurant",
    media_url: "/destinations/thailand.jpg",
  },
];
//

export default function destination() {
  return (
    <div className="w-screen my-auto bg-cover bg-center relative bg-[url('/common/grouptriptravel.jpg')] ">
      <div className="w-screen pt-10 h-300">
        <div className="my-auto ">
          <div className="text-white text-4xl bold  text-center">
            Day wise itinerary
          </div>
          <div className="text-white text-2xl text-center ">
            Bali, 24th May 2024 - 31st May 2024
          </div>

          <LeadGenGroup></LeadGenGroup>
        </div>
      </div>
      <div className="lg:px-20 md:px-20 px-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className=" mt-10 mx-auto  rounded-lg bg-white shadow-2xl border border-gray-600"
          >
            <div className="h-10 bg-black text-white text-2xl pl-2 pb-2 bold align-center rounded-t-lg">
              {" "}
              Day {activity.id}
            </div>
            <div className="flex rounded-2xl sm:justify-stretch md:justify-center lg:justify-center items-center overflow-auto no-scrollbar  grid-rows-1 grid-flow-col scroll-pl-6 snap-x">
              <div className="snap-center">
                <div
                  style={{ "--image-url": `url(${activity.media_url})` }}
                  className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
                ></div>
                <div className=" text-sm  bold font-denton text-center">
                  {activity.dest}
                </div>
              </div>
              <div className="snap-center">
                <div
                  style={{ "--image-url": `url(${activity.media_url})` }}
                  className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
                ></div>
                <div className=" text-sm  bold font-denton text-center">
                  {activity.dest}
                </div>
              </div>
              <div className="snap-center">
                <div
                  style={{ "--image-url": `url(${activity.media_url})` }}
                  className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
                ></div>
                <div className=" text-sm  bold font-denton text-center">
                  {activity.dest}
                </div>
              </div>
              <div className="snap-center">
                <div
                  style={{ "--image-url": `url(${activity.media_url})` }}
                  className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
                ></div>
                <div className=" text-sm  bold font-denton text-center">
                  {activity.dest}
                </div>
              </div>
            </div>

            <div className=" col-span-1 border border-black bg-black">
              <p className="text-white bold text-center md:text-lg lg:text-lg sm:text-sm font-roboto p-2">
                This is the description regarding the store owner and their
                journey so far in travel space. This will include how many
                countries they have travelled and how many destinations they are
                expert in.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
}
