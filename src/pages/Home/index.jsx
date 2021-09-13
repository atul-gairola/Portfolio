import React from "react";

import Layout from "../../global/layouts/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </Layout>
  );
};

export default Home;
