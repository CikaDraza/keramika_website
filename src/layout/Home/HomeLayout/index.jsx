import React from "react";
import HeroSection from "../Hero";
import SectionServices from "../SectionServices";
import SectionChooseUs from "../SectionChooseUs";
import Portfolio from "../Portfolio";
import PriceList from "../PriceList";


export default function HomeLayout(props) {

  return (
    <div>
      <HeroSection {...props} />
      <div className="home-sections">
        <SectionServices {...props} />
        <SectionChooseUs {...props} />
        <Portfolio {...props} />
        <PriceList {...props} />
      </div>
    </div>
  );
}
