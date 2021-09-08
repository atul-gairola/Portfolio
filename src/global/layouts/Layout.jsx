import React from "react";
import { createUseStyles } from "react-jss";

import Header from "../components/Header";

const useStyles = createUseStyles({
  main: {
    padding: "50px 100px",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
