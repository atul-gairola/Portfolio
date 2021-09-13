import React from "react";

import Layout from "../../global/layouts/Layout";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
    </Layout>
  );
};

export default Home;
