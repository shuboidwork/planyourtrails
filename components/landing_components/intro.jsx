

export  function GroupTravelIntro() {
  return (
    <div className="w-screen">
    <div className="grid grid-rows-6 gap-2 py-8 w-screen">
      <div className="w-screen row-span-6 text-center text-gray-500 font-sanchez text-sm md:text-2xl  font-bold ">
        wait, it does not end here
      </div>
      <div className="w-screen row-span-6 text-center text-white font-sanchez text-2xl md:text-5xl  font-bold ">
        We host group travel too
      </div>
    </div>
    </div>

  );
}

export  function DestinationIntro({destination_text}) {
  return (
    
    <div className="grid grid-rows-6 gap-2 py-8 w-screen">
      <div className="w-screen row-span-6 text-center text-black font-sans text-lg md:text-5xl  font-bold ">
        {destination_text}
      </div>
    </div>
    

  );
}

export default function Intro() {
  return (
      <div className="text-center font-sanchez">
        <div className="">
          <p className="text-white text-3xl">your</p>
          <p className="text-white text-6xl ">Dream Vacation</p>       
          <p className="text-white text-3xl">starts here</p>
        </div>
      </div>

  );
}


 


// export  function IntroCarousel() {
//   return (
//     <>
//       <TECarousel ride="carousel">
//         <div className=" w-full overflow-hidden after:clear-both after:block after:content-['']">
//           <TECarouselItem
//             itemID={1}
//             className=" float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide1.jpg"
//               className="block w-full"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={2}
//             className=" float-left hidden -mr-[100%] w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide2.jpg"
//               className="block w-full"
//               alt="..."
//             />
//           </TECarouselItem>
//           <TECarouselItem
//             itemID={3}
//             className=" float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
//           >
//             <img
//               src="https://pastreeadmin.s3.ap-south-1.amazonaws.com/wanderlust_himani/intro_carousel/slide3.jpg"
//               className="block w-full"
//               alt="..."
//             />
//           </TECarouselItem>
//         </div>
//       </TECarousel>
//     </>
//   );
// }






//    bg-[url('https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80')]">


