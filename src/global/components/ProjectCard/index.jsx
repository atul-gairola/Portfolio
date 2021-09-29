import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ReactModal from "react-modal";
import { ReactComponent as GithubIcon } from "../../../assets/images/githubIcon.svg";
import { ReactComponent as ExternalLinkIcon } from "../../../assets/images/externalLinkIcon.svg";
import WhatToWatchTodaySS1 from "../../../assets/images/whatToWatchToday1.png";
import LinkedInCRMImage from "../../../assets/images/linkedInCrm.png";
import IdeaToIPO from "../../../assets/images/ideaToIpo.jpeg";

const useStyles = createUseStyles((theme) => ({
  projectCard: {
    background: theme.colors.background,
    color: theme.colors.base,
    border: `3px solid ${theme.colors.base}`,
    boxShadow: "1px 1px 20px rgba(0,0,0,1)",
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
    background: theme.colors.primary,
    color: theme.colors.background,
    boxShadow: "2px 2px 7px rgba(0,0,0,0.2)",
    opacity: 0.9,
    borderRadius: 5,
  },
  content: {
    background: theme.colors.background,
    position: "absolute",
    maxHeight: "80vh",
    maxWidth: 1000,
    left: "50%",
    overflowY: "auto",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "30px 40px",
    "&  h2": {
      fontSize: "2.3rem",
    },
  },
  titleContainer: {
    marginBottom: 30,
    position: "relative",
    "& > button": {
      position: "absolute",
      right: 0,
      top: 20,
      cursor: "pointer",
      background: "transparent",
      color: theme.colors.base,
      fontWeight: 700,
      border: "none",
    },
  },
  linkContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "10px",
    justifyContent: "start",
  },
  skillContainer: {
    display: "flex",
    marginBottom: 30,
    "& > p": {
      background: theme.colors.base,
      color: theme.colors.background,
      padding: "7px 20px",
      fontSize: "0.9rem",
      borderRadius: 10,
      fontWeight: 700,
      marginRight: 20,
    },
  },
  description: {
    padding: "0 20px",
    fontSize: "1.2rem",
    "& li": {
      marginBottom: 15,
    },
    "& img": {
      width: "100%",
      marginBottom: 30,
    },
    marginBottom: 10,
  },
}));

function getImage(image) {
  switch (image) {
    case "LinkedInCRMImage":
      return LinkedInCRMImage;
    case "WhatToWatchTodaySS1":
      return WhatToWatchTodaySS1;
    case "IdeaToIPO":
      return IdeaToIPO;
  }
}

export default function ProjectCard({ project }) {
  const classes = useStyles();
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <>
      <ReactModal
        isOpen={isModelOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        shouldFocusAfterRender={true}
        className={classes.content}
        preventScroll={true}
      >
        <div className={classes.titleContainer}>
          <h2>{project.name}</h2>
          <div className={classes.linkContainer}>
            {project.prod && (
              <a target="_blank" href={project.prod}>
                <ExternalLinkIcon fill="#fff" width={30} height={30} />
              </a>
            )}
            {project.github[0] && (
              <a target="_blank" href={project.github[0]}>
                <GithubIcon fill="#fff" width={30} height={30} />
              </a>
            )}
          </div>
          <button onClick={() => setIsModelOpen(false)}>Go back</button>
        </div>
        <div className={classes.skillContainer}>
          {project.skills.map((cur) => (
            <p>{cur}</p>
          ))}
        </div>
        <div className={classes.description}>
          {project.images?.map((cur) => (
            <img src={getImage(cur)} alt="image" />
          ))}
          <ul>
            {project.description.map((cur) => (
              <li>{cur}</li>
            ))}
          </ul>
        </div>
      </ReactModal>
      <div
        onClick={() => setIsModelOpen((prev) => !prev)}
        className={classes.projectCard}
      >
        <h3>{project.name}</h3>
        <div className={classes.techContainer}>
          {project.skills.map((cur) => (
            <p className={classes.tag}>{cur}</p>
          ))}
        </div>
        <p>{project.gist}</p>
      </div>
    </>
  );
}
