import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-screen grid grid-cols-2">
      <Link href={"/"} className="justify-start m-5">
        <div className=" flex ">
          <img
            src="/common/travellogo.svg"
            className="w-12 h-12 object-contain"
          ></img>

          <div
            className="font-bold lg:text-xl  md:text-xl sm:text-sm text-white text-start pt-3 pl-2 font-sanchez"
            href="/"
          >
            Travel Store
          </div>
        </div>
      </Link>

      <Link
        className="font-bold lg:text-xl md:text-xl sm:text-sm text-white text-end p-2 justify-end m-5 font-sanchez "
        href="/signin"
      >
        <div className="col-span-1 sm:row-span-1 bg-blue-300 rounded-lg flex justify-center items-center">
          <button className="text-white bold text-center m-2">Sign In</button>
        </div>
      </Link>
    </div>
  );
}

///

// <Image
//   src='/travellogo.svg'
//   height={18}
//   width={18}
//   alt="Logo"></Image>
///
