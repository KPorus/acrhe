import React from "react";
import Banner from "../Banner/Banner";

import AboutSection from "../AboutSection";
import ServicesSection from "../ServicesSection";
import ProjectSection from "../ProjectSection";
import BlogSection from "../BlogSection";
import ExpertSection from "../ExpertSection";
const Header = () => {
  return (
    <div>      
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ProjectSection></ProjectSection>
      <ExpertSection></ExpertSection>
      <BlogSection></BlogSection>
    </div>
  );
};

export default Header;
