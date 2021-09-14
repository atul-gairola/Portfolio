import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles((theme) => ({
  linksContainer: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
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
      <Link to="/#about-me">
        <li>about me</li>
      </Link>
      <Link to="/#skills">
        <li>skills</li>
      </Link>
      <Link to="/#projects">
        <li>projects</li>
      </Link>
      <Link to="/#contact-me">
        <li>contact me</li>
      </Link>
    </ul>
  );
};

export default NavLinks;
