import React from "react";

import Layout from "../../global/layouts/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import BlogSection from "./components/BlogSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
