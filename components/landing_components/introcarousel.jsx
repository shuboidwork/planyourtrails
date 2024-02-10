"use client"
import { TECarousel, TECarouselItem } from "tw-elements-react";

    //public/Items.json




export  default function IntroCarousel() {
  return (
    <>
      <TECarousel ride="carousel">
        <div className=" w-full overflow-hidden after:clear-both after:block after:content-['']">
           <TECarouselItem
            itemID={1}
            className=" float-left -mr-[100%] hidden w-full transition-transform duration-[50ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide3.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className=" float-left -mr-[100%] hidden w-full transition-transform duration-[50ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide1.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className=" float-left hidden -mr-[100%] w-full transition-transform duration-[50ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide2.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
         
        </div>
      </TECarousel>
    </>
  );
}






//    bg-[url('https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80')]">


