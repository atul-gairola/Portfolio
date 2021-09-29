import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  blogSectionContainer: {
    padding: "200px 0",
    textAlign: "center",
    height: "100vh",
    marginBottom: 50,
    display: "grid",
    placeContent: "center",
    "& > h2": {
      fontSize: "3.2rem",
      marginBottom: "50px",
      paddingBottom: "10px",
      borderBottom: `1px solid ${theme.colors.base}`,
    },
    "& > p": {
      fontSize: "1.7rem",
      width: "50%",
      margin: "20px auto"
    },
    "& > a": {
      width: "fit-content",
      margin: "20px auto",
      padding: "10px 20px",
      borderRadius: "5px",
      background: theme.colors.primary,
      color: theme.colors.background,
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
    },
  },
}));

function BlogSection() {
  const classes = useStyles();
  return (
    <section id="blogs" className={classes.blogSectionContainer}>
      <h2>Blogs</h2>
      <p>
        You can read my blogs on my medium account. I write mostly about
        Javascript and web development.
      </p>
      <a href="https://medium.com/@atulgairola08" target="_blank">
        View all blogs
      </a>
    </section>
  );
}

export default BlogSection;
