import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Sanchez } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

export const metadata = {
  title: "Planyourtrails",
  description: "by Chirag Khandelwal",
};

const sanchez = Sanchez({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sanchez",
});
const merriweather = Merriweather({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-merriweather",
});
const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-abril",
});

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   const use = async () => {
  //     (await import("tw-elements")).default;
  //   };
  //   use();
  // }, []);
  return (
    <html
      lang="en"
      className={`w-screen overflow-x-hidden position-fixed ${merriweather.variable}  ${abril.variable} `}
    >
      <SpeedInsights />
      <body className="">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
