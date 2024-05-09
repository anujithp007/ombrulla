import React from "react";
import Navsection from "../components/Navsection";
import { Homesection } from "../components/Homesection";
import About from "../components/About";
import { ServiceSection } from "../components/ServiceSection";
import PetranSection from "../components/PetranSection";
import ProductSection from "../components/ProductSection";
import Marquee from "../components/Marquee";
import BrandSection from "../components/BrandSection";
import BlogSection from "../components/BlogSection";
import FooterSection from "../components/FooterSection";
import Swiper from "../components/Swiper";


export const Page = () => {
  return (
    <div>
      <Navsection />
      <Homesection />
      <div className="pt-[8rem]">
        <About />
      </div>
      <div className="pt-[8rem]">
        <ServiceSection />
      </div>
      <div className="pt-[8rem]">
        <PetranSection />
      </div>
      <div className="pt-[8rem]">
        <ProductSection/>
      </div>
      <div className="pt-[8rem]">
        <Marquee/>
      </div>
      <div className="pt-[8rem]">
      <Swiper />
      </div>
      <div className="pt-[8rem]">
        <BrandSection/>
      </div>
      <div className="pt-[8rem]">
        <BlogSection/>
      </div>
      <div className="pt-[8rem]">
        <FooterSection/>
      </div>
      
    </div>


  );
};
