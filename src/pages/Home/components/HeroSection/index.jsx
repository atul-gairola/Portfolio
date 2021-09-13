import React from "react";
import { createUseStyles } from "react-jss";

import HeroImage from "../../../../assets/images/HeroImage.png";

const useStyles = createUseStyles((theme) => ({
  heroSection: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    height: "calc(100vh - 176px)",
    alignItems: "center",
    "& h1": {
      fontSize: "4.5em",
    },
    "& h2": {
      fontSize: "3.5em",
      color: theme.colors.primary,
      marginBottom: 0,
      transform: "translateY(-10px)",
    },
    "& p:first-of-type": {
      fontSize: "2em",
    },
    "& p:last-of-type": {
      fontSize: "2em",
      "& > span": {
        fontWeight: "800",
      },
    },
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.heroSection}>
      <div>
        <p>Hey! I am</p>
        <h1>Atul Gairola</h1>
        <h2>Fullstack Web Developer</h2>
        <p>
          From <span>personal websites</span> to <span>complex webapps</span>{" "}
          and everything in between
        </p>
      </div>
      <div>
        <img src={HeroImage} alt="Atul Gairola" />
      </div>
    </section>
  );
};

export default HeroSection;
