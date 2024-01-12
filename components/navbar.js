import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Navbar() {
  return (
    <nav className="bg-white p-4  grid grid-flow-col justify-stretch ...">
      <div className="">
        <Link href="/">
          <div className="text-black font-bold text-lg">Your Company Name</div>
        </Link>
      </div>
      <div className="">
        <Link href="/signin">
          <div className="text-black">Sign In</div>
        </Link>
      </div>
    </nav>
  );
}
