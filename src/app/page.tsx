import ServicesSection from "./Components/benefits";
import Hero from "./Components/Hero";
import TopProducts from "./Components/TopProducts";
import TrailerSection from "./Components/Trailer";
import VIPSection from "./Components/VipSection";

export default function Home(){
  return(
    <div>
      <Hero/>
      <TopProducts/>
      <ServicesSection/>
      <TrailerSection/>
      <VIPSection/>
    </div>
  )
}