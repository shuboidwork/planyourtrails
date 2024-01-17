import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/common_components/navbar";

export const metadata = {
  title: "Your Travel Store",
  description: "Powered By Pastree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className=" bg-cover bg-black ">
        <Navbar className=""></Navbar>
        {children}
      </body>
    </html>
  );
}
