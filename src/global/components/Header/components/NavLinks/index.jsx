import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  linksContainer: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    gridGap: 50,
    alignItems: "center",
    "& > a": {
      fontWeight: "bold",
      fontSize: "1.1rem",
      paddingBottom: 5,
      borderBottom: "2px solid transparent",
      "&:hover": {
        borderBottom: `2px solid ${theme.colors.base}`,
      },
    },
  },
}));

const NavLinks = () => {
  const classes = useStyles();
  return (
    <ul className={classes.linksContainer}>
      <a href="#about-me">
        <li>about me</li>
      </a>
      <a href="#skills">
        <li>skills</li>
      </a>
      <a href="#projects">
        <li>projects</li>
      </a>
      <a href="#blogs">
        <li>blogs</li>
      </a>
      <a href="#contact-me">
        <li>contact me</li>
      </a>
    </ul>
  );
};

export default NavLinks;
