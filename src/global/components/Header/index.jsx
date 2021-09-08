import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import NavLinks from "./components/NavLinks";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    padding: "20px 100px",
    alignItems: "center",
  },
  logoContainer: {
    flexGrow: 1,
    "& a": {
      display: "inline-block",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <Link to="/">
          <Logo size={24} />
        </Link>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
