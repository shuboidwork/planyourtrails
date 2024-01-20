import Link from "next/link";

import Image from "next/image";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbar() {
  return (
    <div className="w-screen grid grid-cols-2">
      <Link href={"/"} className="justify-start m-5">
        <div className=" flex ">
          <img
            src="/common/instagram.svg"
            className="w-10 h-10 object-contain"
          ></img>

          <div className="">
            <Link href="/">
              <div className="font-bold lg:text-xl  md:text-xl sm:text-sm text-white text-start p-2">
                Shubham Travels
              </div>
            </Link>
          </div>
        </div>
      </Link>

      <div className="m-5">
        <Link href="/signin">
          <div className="font-bold lg:text-xl md:text-xl sm:text-sm text-white text-end p-2">
            Sign In
          </div>
        </Link>
      </div>
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
