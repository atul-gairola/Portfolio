import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { ReactComponent as LinkedInIcon } from "../../../assets/images/linkedInIcon.svg";
import { ReactComponent as MediumIcon } from "../../../assets/images/mediumIcon.svg";
import { ReactComponent as GithubIcon } from "../../../assets/images/githubIcon.svg";

const useStyles = createUseStyles((theme) => ({
  footer: {
    display: "grid",
    placeContent: "center",
    textAlign: "center",
    paddingBottom: 30,
    fontWeight: "bold",
  },
  linksContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    marginBottom: 15,
    "& > a": {
      transition: "0.7s",
      "&:hover": {
        transform: "translateY(-8px)",
      },
    },
  },
}));

function Footer() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.linksContainer}>
        <a target="_blank" href="https://github.com/atul-gairola">
          <GithubIcon fill={theme.colors.base} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/atul-gairola-06875319b/"
        >
          <LinkedInIcon fill={theme.colors.base} />
        </a>
        <a target="_blank" href="https://medium.com/@atulgairola08">
          <MediumIcon fill={theme.colors.base} />
        </a>
      </div>
      <p>Made by Atul Gairola</p>
    </footer>
  );
}

export default Footer;
