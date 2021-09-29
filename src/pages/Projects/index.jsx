import React from "react";
import { createUseStyles } from "react-jss";

import Layout from "../../global/layouts/Layout";
import ProjectCard from "../../global/components/ProjectCard";
import { projects } from "../../projects";

const useStyles = createUseStyles((theme) => ({
  heading: {
    paddingBottom: 10,
    borderBottom: `1px solid ${theme.colors.base}`,
    marginBottom: 50,
  },
  projectContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.heading}>
        <h1>Projects</h1>
      </div>
      <div className={classes.projectContainer}>
        {projects.map((cur, i) => {
          return <ProjectCard project={cur} key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
