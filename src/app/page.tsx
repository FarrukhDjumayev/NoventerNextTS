import Image from "next/image";
import  HomePage from "./MainPage/Home";
import CardsSection from "./MainPage/CardsSection"
import Loyihalarimiz from "./MainPage/LoyihlarimizSection"
import Xizmatlarimiz from "./MainPage/Xizmatlarimiz"
import Footer from "./MainPage/Footer";

export default function Home() {
  return (
    <div className="">
      <HomePage/>
      <CardsSection/>
      <Loyihalarimiz/>
      <Xizmatlarimiz/>
      <Footer/>


      
    </div>
  );
}
