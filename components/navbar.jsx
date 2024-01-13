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
    <div className="w-screen grid grid-cols-2 bg-gradient-to-br from-transparent to-black bg-opacity-5 ">

        <div className="pl-5 align-middle ">
          <Link href="/">
            <div className="font-bold text-sm text-white text-start ">
              Shubham Travels
            </div>
          </Link>
        </div>
        
        <div className="pr-5 align-middle ">
          <Link href="/signin">
            <div className="font-bold text-sm text-white text-end ">Sign In</div>
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