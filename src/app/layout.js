import "./globals.css";
import Navbar from "../../components/common_components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBarFlow from "../../components/common_components/navbarflow";
import { Sanchez } from "next/font/google";

export const metadata = {
  title: "Your Travel Store",
  description: "Powered By Pastree",
};

const sanchez = Sanchez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sanchez",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`w-screen overflow-x-hidden position-fixed ${sanchez.variable}`}
    >
      <SpeedInsights />
      <body className=" bg-cover bg-black ">
        {/* <NavBarFlow className=""></NavBarFlow> */}
        {children}
      </body>
    </html>
  );
}
