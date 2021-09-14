import React from "react";
import { createUseStyles } from "react-jss";

import HeroImage from "../../../../assets/images/HeroImage.png";
import { ReactComponent as ArrowBottomIcon } from "../../../../assets/images/arrowBottom.svg";

const useStyles = createUseStyles((theme) => ({
  heroSection: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gridGap: 100,
    marginBottom: 50,
    position: "relative",
    paddingBottom: "80px",
    height: "calc(100vh - 175px)",
    alignItems: "center",
    alignContent: "center",
    "& h1": {
      fontSize: "4em",
    },
    "& h2": {
      fontSize: "3em",
      color: theme.colors.primary,
      marginBottom: 0,
      transform: "translateY(-10px)",
    },
    "& p:first-of-type": {
      fontSize: "1.7em",
    },
    "& p:last-of-type": {
      fontSize: "1.8em",
      "& > span": {
        fontWeight: "800",
      },
    },
    "& button": {
      color: theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
      background: "transparent",
      padding: "10px 20px",
      fontSize: "1.2rem",
      cursor: "pointer",
      marginTop: 30,
    },
  },
  iconContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "0",
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
        <button>Contact me</button>
      </div>
      <div>
        <img src={HeroImage} alt="Atul Gairola" />
      </div>
      <div className={classes.iconContainer}>
        <ArrowBottomIcon />
      </div>
    </section>
  );
};

export default HeroSection;
