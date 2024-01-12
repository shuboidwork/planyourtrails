import Destinationexpertise from "../../components/destinationexpertise";
import Intro from "../../components/intro";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <html>
      <body className="bg-gradient-to-r from-pink-500 via-purple-500 to-black">
        <Navbar></Navbar>
        <Intro></Intro>
        <Destinationexpertise></Destinationexpertise>
      </body>
    </html>
  );
}

//"bg-gradient-to-r from-pink-500 via-purple-500 to-black opacity-30"
