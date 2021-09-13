import React from "react";

import Layout from "../../global/layouts/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillSection />
    </Layout>
  );
};

export default Home;
