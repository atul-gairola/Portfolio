import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Logo from "../Logo";
import NavLinks from "./components/NavLinks";
import HamburgerMenu from "./components/HamburgerMenu";

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

const Header = ({ showLinks }) => {
  const classes = useStyles();
  const { viewports } = useTheme();

  const isSmallTablet = useMediaQuery({
    query: `(max-device-width: ${viewports.smallTablet})`,
  });

  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <Link to="/">
          <Logo size={24} />
        </Link>
      </div>
      {showLinks ? isSmallTablet ? <HamburgerMenu /> : <NavLinks /> : null}
    </header>
  );
};

export default Header;
