import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Link } from "react-router-dom";
import { ReactComponent as CrossIcon } from "../../../../../../../assets/images/Cross.svg";

const useStyles = createUseStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    background: theme.colors.background,
    top: 0,
    left: 0,
    zIndex: 100,
    display: "grid",
    gridTemplateRows: "auto 1fr",
    "& ul": {
      display: "grid",
      gridTemplateColumns: "1fr",
      listStyle: "none",
      placeContent: "center",
      placeItems: "center",
      gridGap: 20,
      "& li": {
        padding: "10px 20px",
        fontSize: 24,
      },
    },
    "& header": {
      padding: "20px 30px",
      display: "grid",
      placeContent: "end",
      "& button": {
        color: theme.colors.primary,
      },
    },
  },
}));

const SideMenu = ({ toggleSideMenu }) => {
  const classes = useStyles();
  const { colors } = useTheme();
  return (
    <div className={classes.container}>
      <header>
        <button onClick={toggleSideMenu}>
          <CrossIcon width={20} height={20} fill={colors.primary} />
        </button>
      </header>
      <ul>
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
    </div>
  );
};

export default SideMenu;
