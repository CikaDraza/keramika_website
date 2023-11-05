import React from "react";
import CeramicSection from "../CeramicSection";
import HeroSection from "../Hero";
import IntroSection from "../IntroSection";
import PlumbSection from "../PlumbSection";
import RenovationSection from "../RenovationSection";
import StoneSection from "../StoneSection/";


export default function ServicesLayout(props) {

  return (
    <div className="services-section">
      <HeroSection {...props} />
      <IntroSection {...props} />
      <CeramicSection {...props} />
      <RenovationSection {...props} />
      <StoneSection {...props} />
      <PlumbSection {...props} />
    </div>
  );
}
