import React from "react";

import Layout from "../../global/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <section>
        <p>Hey! I am</p>
        <h1>Atul Gairola</h1>
        <h2>Fullstack Web Developer</h2>
        <p>
          From <span>personal websites</span> to <span>complex webapps</span>{" "}
          and everything in between
        </p>
      </section>
    </Layout>
  );
};

export default Home;
