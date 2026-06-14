import Image from "next/image";
import IntroSectionPart from "./components/IntroSectionPart";
import PriceSection from "./components/PriceSection";





export default function Home() {
  return (
   <div>
     <IntroSectionPart/>
     <PriceSection />
   </div>
  );
}
