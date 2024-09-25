import Block from "@/components/ui/Block";
import CatalogSwiper from "@/components/ui/CatalogSwiper";
import CatalogueSection from "@/components/ui/CatalogueSection";
import HeroSection from "@/components/ui/HeroSection";
import AboutComponent from "@/components/ui/AboutComponent";
import Image from "next/image";
import Gallery from "@/components/ui/Gallery";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Block/>
      <AboutComponent/>
      <CatalogueSection/>
      <CatalogSwiper/>
      
      </main> 
  );
}
