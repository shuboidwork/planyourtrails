



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
      <div className="text-center text-white  font-sanchez  mb-10 my-auto">
        <div className="">
          <p className="text-slate-200 text-3xl">Book your</p>
          <p className="text-white text-9xl">dream tour</p>
          <p className="text-slate-200 text-3xl">with us</p>
        </div>
      </div>

  );
}






//    bg-[url('https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80')]">


