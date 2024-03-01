import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Sanchez } from "next/font/google";
import { Merriweather } from "next/font/google";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

export const metadata = {
  title: "Your Travel Store",
  description: "Powered By Pastree",
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
      className={`w-screen overflow-x-hidden position-fixed ${merriweather.variable}`}
    >
      <SpeedInsights />
      <body className="">
        {/* <NavBarFlow className=""></NavBarFlow> */}
        {children}
      </body>
    </html>
  );
}
