import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import { ReactComponent as HamburgerIcon } from "../../../../../assets/images/Hamburger.svg";

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
  return (
    <div className={classes.menuContainer}>
      <button>
        <HamburgerIcon width={30} height={40} fill={colors.primary} />
      </button>
    </div>
  );
};

export default HamburgerMenu;
