import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  linksContainer: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: 30,
    alignItems: "center",
  },
});

const NavLinks = () => {
  const classes = useStyles();
  return (
    <ul className={classes.linksContainer}>
      <Link to="/#about-me">
        <li>about me</li>
      </Link>
      <Link to="/#my-work">
        <li>my work</li>
      </Link>
      <Link to="/#contact-me">
        <li>contact me</li>
      </Link>
    </ul>
  );
};

export default NavLinks;