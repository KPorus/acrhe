import React from "react";
import Banner from "../Banner/Banner";

import AboutSection from "../AboutSection";
import ServicesSection from "../ServicesSection";
import ProjectSection from "../ProjectSection";
const Header = () => {
  return (
    <div>      
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ProjectSection></ProjectSection>
    </div>
  );
};

export default Header;
