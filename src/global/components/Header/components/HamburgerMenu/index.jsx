import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";

import { ReactComponent as HamburgerIcon } from "../../../../../assets/images/Hamburger.svg";
import SideMenu from "./components/SideMenu";

const useStyles = createUseStyles((theme) => ({
  menuContainer: {
    "& button": {
      background: "transparent",
      border: "none",
    },
  },
}));

const HamburgerMenu = () => {
  const classes = useStyles();
  const { colors } = useTheme();
  const [showSideMenu, setShowSideMenu] = useState(false);

  function toggleSideMenu() {
    setShowSideMenu((prev) => !prev);
  }

  return (
    <div className={classes.menuContainer}>
      <button onClick={toggleSideMenu}>
        <HamburgerIcon width={30} height={40} fill={colors.primary} />
      </button>
      {showSideMenu && <SideMenu toggleSideMenu={toggleSideMenu} />}
    </div>
  );
};

export default HamburgerMenu;
