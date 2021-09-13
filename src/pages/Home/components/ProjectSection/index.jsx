import React from "react";
import { createUseStyles } from "react-jss";

import { projects } from "../../../../projects";

const useStyles = createUseStyles((theme) => ({
  projectSectionContainer: {
    padding: "200px 0",
    textAlign: "center",
    height: "100vh",
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
  },
  projectWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  projectCard: {
    background: theme.colors.base,
    color: theme.colors.background,
    padding: "20px 30px",
    width: 400,
    marginRight: 30,
    marginBottom: 30,
    cursor: "pointer",
    transition: "0.7s",
    "& > h3": {
      fontWeight: 800,
      fontSize: "1.5rem",
      marginBottom: 20,
      paddingBottom: 10,
      borderBottom: `2px solid ${theme.colors.background}`,
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  techContainer: {
    display: "flex",
    marginBottom: 20,
    justifyContent: "center",
    "& > p": {
      fontWeight: "bold",
    },
  },
  tag: {
    marginRight: 10,
    padding: "5px 10px",
    fontSize: "0.8rem",
    background: theme.colors.background,
    color: theme.colors.base,
    opacity: 0.9,
    borderRadius: 5,
  },
}));

function ProjectCard({ project }) {
  const classes = useStyles();

  return (
    <div className={classes.projectCard}>
      <h3>{project.name}</h3>
      <div className={classes.techContainer}>
        {project.skills.map((cur) => (
          <p className={classes.tag}>{cur}</p>
        ))}
      </div>
      <p>{project.gist}</p>
    </div>
  );
}

function ProjectSection() {
  const classes = useStyles();

  return (
    <section id="projects" className={classes.projectSectionContainer}>
      <h2>Projects</h2>
      <div className={classes.projectWrapper}>
        {projects.map((cur, i) => (
          <ProjectCard project={cur} key={i} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
