import LeadGen, {
  LeadGenGroup,
} from "../../../components/common_components/leadgen";
import Footer, {
  FooterGroup,
} from "../../../components/common_components/footer";
import { DestinationIntro } from "../../../components/landing_components/intro";

const itinerary = [
  {
    id: 1,
    description: "It is a long established ",
    activities: [
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
    ],
  },
  {
    id: 2,
    description:
      "jhfy accident, sometimes on purpose (injected humour and the like).",
    activities: [
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
    ],
  },
  {
    id: 3,
    description:
      "It is a long he  it look liw use Loreuncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    activities: [
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
    ],
  },
  {
    id: 4,
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    activities: [
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
    ],
  },
];

//

export default function destination() {
  return (
    <div className="w-screen my-auto font-sanchez ">
      <div className="w-screen pt-10 h-300">
        <div className="my-auto ">
          <div className="text-white text-4xl bold  text-center font-sanchez">
            Day wise itinerary
          </div>
          <div className="text-white text-2xl text-center font-sanchez">
            Bali, 24th May 2024 - 31st May 2024
          </div>

          <LeadGenGroup></LeadGenGroup>
        </div>
      </div>
      <div className="lg:px-20 md:px-20 px-5 relative">
        {itinerary.map((day) => (
          <div
            key={day.id}
            className=" sticky top-20 mt-10 mx-auto  rounded-lg bg-[url('/common/paperbackedge.png')] shadow-2xl border border-gray-600"
          >
            <div className="h-10 bg-black text-white text-2xl pl-2 pb-2 bold align-center rounded-t-lg">
              {" "}
              Day {day.id}
            </div>
            <div className="flex rounded-2xl sm:justify-stretch md:justify-center lg:justify-center items-center overflow-auto no-scrollbar  grid-rows-1 grid-flow-col scroll-pl-6 snap-x">
              {day.activities.map((activity) => (
                <div key={activity.id} className="snap-center">
                  <div
                    style={{ "--image-url": `url(${activity.media_url})` }}
                    className={` bg-cover bg-opacity-50 bg-[image:var(--image-url)] w-40 h-40 rounded-bl-lg col-span-2 m-3`}
                  ></div>
                  <div className=" text-sm  bold font-sanchez text-center">
                    {activity.dest}
                  </div>
                </div>
              ))}
            </div>

            <div className=" col-span-1 border border-black bg-gray-900">
              <p className="text-white bold md:text-lg lg:text-lg sm:text-sm p-2 font-sanchez">
                {day.description}
              </p>
              <ul class="list-none text-white p-2 font-sanchez">
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
                <li>
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
              </ul>
            </div>
          </div>
        ))}
        <div className=" mt-10 mx-auto  rounded-lg bg-white shadow-2xl border border-gray-600">
          <div className="h-10 bg-black text-white text-2xl pl-2 pb-2 bold align-center rounded-t-lg">
            {" "}
            Inclusions
          </div>

          <div className=" col-span-1 border border-black bg-gray-900 p-2">
            <ul class="list-disc text-white p-2">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-10 mx-auto  rounded-lg bg-white shadow-2xl border border-gray-600">
          <div className="h-10 bg-black text-white text-2xl pl-2 pb-2 bold align-center rounded-t-lg">
            {" "}
            Exclusions
          </div>

          <div className=" col-span-1 border border-black bg-gray-900 p-2">
            <ul className="list-disc text-white p-2">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <FooterGroup></FooterGroup>
      </div>
    </div>
  );
}
