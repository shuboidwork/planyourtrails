import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";

export const metadata = {
  title: "Your Travel Store",
  description: "Powered By Pastree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-pink-500 via-purple-500 to-black">
        {children}
      </body>
    </html>
  );
}
