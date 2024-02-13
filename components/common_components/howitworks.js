import LeadGen, { LeadGenNew } from "./leadgen";

const howSteps = [
  {
    id: 1,
    tittle: "Create your Enquiry",
    icon_url: "/elements/sign-up.png",
    description:
      "Share your preferred destination, dates of travel and other details",
  },
  {
    id: 2,
    tittle: "Understanding your requirement",
    icon_url: "/elements/phone-call.png",
    description:
      "Our team or we will set up a call with you to understrand your requirements in detail",
  },
  {
    id: 3,
    tittle: "Get a customised itinerary ",
    icon_url: "/elements/destination.png",
    description:
      "We will plan the best possible trip for you which you can access by paying a small deposit. We will allow upto 2 iterations to the itinerary.",
  },
  {
    id: 4,
    tittle: "Book your dream trip ",
    icon_url: "/elements/booking.png",
    description:
      "We will make all the bookings for you - all the hotels, activities and flights so that you can sit back and relax.",
  },
];
export default function HowItWorks() {
  return (
    <div className="w-full px-10">
      <div className=" items-center">
        <div className="text-center m-5">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight lg:text-4xl font-sanchez">
            How this works?
          </h2>
          <p className="text-base font-medium leading-7">
            We help you create a customise itinerary based on your requirement
            and give you package to directly book it.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
              <span className="text-base font-bold leading-7">1</span>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                Create your Enquiry
              </h3>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                Share your preferred destination, your details so that we can
                reach out to you.
              </p>
            </div>
          </div>
          <div className="sm:rotate-90 md:rotate-0 lg:rotate-0 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clipPath="url(#clip0_3346_6663)">
                <path
                  d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                  fill="#68769F"
                />
              </g>
              <defs>
                <clipPath id="clip0_3346_6663">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
              <span className="text-base font-bold leading-7">2</span>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                Requirement Call/Communication
              </h3>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                We will communicate you on WhatsApp/Email or if required call
                and understand your requirement more in details.
              </p>
            </div>
          </div>
          <div className="sm:rotate-90 md:rotate-0 rotate-90 lg:rotate-0 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clipPath="url(#clip0_3346_6663)">
                <path
                  d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                  fill="#68769F"
                />
              </g>
              <defs>
                <clipPath id="clip0_3346_6663">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
              <span className="text-base font-bold leading-7">3</span>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                Creating curated itinerary
              </h3>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                We will apply our travel brain and create a personalised curated
                itinerary for you.
              </p>
            </div>
          </div>
          <div className="sm:rotate-90 md:rotate-0 rotate-90 lg:rotate-0 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="42"
              viewBox="0 0 43 42"
              fill="none"
            >
              <g clipPath="url(#clip0_3346_6663)">
                <path
                  d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                  fill="#68769F"
                />
              </g>
              <defs>
                <clipPath id="clip0_3346_6663">
                  <rect
                    width="42"
                    height="42"
                    fill="white"
                    transform="translate(0.666748)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
              <span className="text-base font-bold leading-7">4</span>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                Finalise your Travel Bookings
              </h3>
              <p className="text-base font-medium leading-7 text-dark-grey-600">
                We reach out to you with final itinerary and share package to
                book. Once booked you are ready for an awesome travel experience
              </p>
            </div>
          </div>
        </div>
        <div className="text-center m-10">
          <h2 className="mb-2 text-3xl font-extrabold leading-tight text-dark-grey-900 lg:text-4xl font-sanchez">
            Why is this for you?
          </h2>
          <p className="text-base font-medium lg:text-xl sm:text-sm leading-7 text-dark-grey-600 pt-3">
            We make sure the itinerary is experential and suitable for your
            travel type. We add offbeat places which are not usually visited by
            people. And to add we give exclusive travel deals in our packages
          </p>
        </div>
        <LeadGen></LeadGen>
      </div>
    </div>
  );
}

export function HowItWorksTrial() {
  return (
    <div className="w-full bg-cover bg-gradient-to-b from-white via-oceanbluelight to-white">
      <div className="">
        <p className="text-center font-sanchez bold text-3xl text-oceanblue ">
          How do we do it?
        </p>
        <p className="text-center font-medium font-sanchez mt-2 ">
          using our travel experience we will plan the best trip for you as per
          your taste and budget to any destination across the world in 4 simple
          steps
        </p>
      </div>
      <div className=" my-5 items-center pl-2 pr-2 mt-30 w-5/6 lg:w-1/2 md:w-1/2 mx-auto ">
        {howSteps.map((step) => (
          <div
            key={step.id}
            className="sticky top-20 h-56 flex items-start gap-4 bg-white  p-3 my-3 rounded-md shadow-lg shadow-oceanbluelight"
          >
            <div className="flex flex-col items-center">
              <img className="w-10 h-10 mb-3" src={step.icon_url}></img>

              <h3 className="mb-2 text-lg text-oceanblue font-sanchez text-center">
                {step.tittle}
              </h3>
              <p className="text-obtext font-sanchez font-sm text-center">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
