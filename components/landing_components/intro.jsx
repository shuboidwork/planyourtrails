



export  function GroupTravelIntro() {
  return (
    <div className="w-screen">
    <div className="grid grid-rows-6 gap-2 py-8 w-screen">
      <div className="w-screen row-span-6 text-center text-gray-500 font-roboto text-sm md:text-2xl  font-bold ">
        wait, it does not end here
      </div>
      <div className="w-screen row-span-6 text-center text-white font-roboto text-2xl md:text-5xl  font-bold ">
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
    <div className="w-screen">
    <div className="grid grid-rows-10 gap-4 py-8 w-screen">
      <div className="row-span-2"></div>
      <div className=" w-50 row-span-4 text-center text-white  font-roboto text-xl md:text-5xl font-bold align-middle ">
        Book your dream destination with us
        <hr className="bg-gray-400 h-1 w-1/4 mx-auto animate-ping"></hr>
      </div>
      <div className="row-span-2"></div>
    </div>
    </div>

  );
}






//    bg-[url('https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80')]">


