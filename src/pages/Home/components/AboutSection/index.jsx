import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  aboutSectionContainer: {
    padding: "200px 0",
    textAlign: "center",
    height: "100vh",
    display: "grid",
    placeContent: "center",
    "& > h2": {
      fontSize: "3.2rem",
      marginBottom: "50px",
      paddingBottom: "10px",
      borderBottom: `1px solid ${theme.colors.base}`,
    },
    "& > p": {
      fontSize: "1.7rem",
    },
  },
}));

function AboutSection() {
  const classes = useStyles();

  return (
    <section id="about" className={classes.aboutSectionContainer}>
      <h2>About me</h2>
      <p>
        I am Atul Gairola, a MERN stack web developer and designer from India. I
        am currently working as a Fullstack web dev intern and also taking
        freelance works 💻, while pursuing my Btech in Computer Science 🎓. I
        believe in the philosophy that "one can never learn everything, but
        there is nothing one cannot learn." Thus I am passionate about
        challenging myself to learn more and create more everyday. When I am not
        developing you can find me watching anime or surfing through youtube
        falling trap to clickbaits. I like watching documentaries on space and
        wildlife and am starting to try reading as a hobby.
      </p>
    </section>
  );
}

export default AboutSection;
