"use client"
import { TECarousel, TECarouselItem } from "tw-elements-react";

    //public/Items.json
 const responsive=[
          {
            "id": 1,
            "title": "Swiper Carousel Example",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1597364662/kizmelvin/ussama-azam-hlg-ltdCoI0-unsplash_ttfjib.jpg"
          },
          {
            "id": 2,
            "title": "Swiper Carousel Example",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645530199/kizmelvin/Carousel%20assets/slim-emcee-jzdOX0XkXr8-unsplash_zocsdq.jpg"
          },
          {
            "id": 3,
            "title": "Swiper Carousel Example",
            "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
            "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645534321/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg"
          }
        ]
  



export  default function IntroCarousel() {
  return (
    <>
      <TECarousel ride="carousel">
        <div className=" w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className=" float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide1.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className=" float-left hidden -mr-[100%] w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide2.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className=" float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide3.jpg"
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


