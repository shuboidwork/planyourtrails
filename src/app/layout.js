import "./globals.css";
import Navbar from "../../components/common_components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Your Travel Store",
  description: "Powered By Pastree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden position-fixed">
      <SpeedInsights />
      <body className=" bg-cover bg-black ">
        <Navbar className=""></Navbar>
        {children}
      </body>
    </html>
  );
}
