import React from "react";
import { createUseStyles } from "react-jss";
import ProjectCard from "../../../../global/components/ProjectCard";
import { Link } from "react-router-dom";

import { projects } from "../../../../projects";

const useStyles = createUseStyles((theme) => ({
  projectSectionContainer: {
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
    },
    "& > a": {
      width: "fit-content",
      margin: "20px auto",
    },
    "&  button": {
      padding: "10px 20px",
      borderRadius: "5px",
      background: theme.colors.primary,
      color: theme.colors.background,
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
    },
  },
  projectWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

function ProjectSection() {
  const classes = useStyles();

  return (
    <section id="projects" className={classes.projectSectionContainer}>
      <h2>Projects</h2>
      <div className={classes.projectWrapper}>
        {projects.slice(0, 3).map((cur, i) => (
          <ProjectCard project={cur} key={i} />
        ))}
      </div>
      <Link to="/projects">
        <button>View All</button>
      </Link>
    </section>
  );
}

export default ProjectSection;
