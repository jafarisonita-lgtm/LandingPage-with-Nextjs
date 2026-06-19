import Image from "next/image";
import IntroSectionPart from "./components/IntroSectionPart";
import PriceSection from "./components/PriceSection";
import HeroSection from "./components/HeroSection";





export default function Home() {
  return (
   <div>
    <HeroSection />
     <IntroSectionPart/>
     <PriceSection />
   </div>
  );
}
