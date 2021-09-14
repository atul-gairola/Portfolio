import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  skillSectionContainer: {
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
  },
  skillWrapper: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "700px",
    justifyContent: "center",
  },
  skill: {
    background: theme.colors.base,
    color: theme.colors.background,
    boxShadow: "1px 1px 20px rgba(0,0,0,1)",
    padding: "10px 30px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginRight: "20px",
    marginBottom: "20px",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    transition: "0.7s",
  },
}));

function SkillTag({ name }) {
  const classes = useStyles();
  return <div className={classes.skill}>{name}</div>;
}

function SkillSection() {
  const classes = useStyles();
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "ReactJS",
    "NextJS",
    "MongoDB",
    "Mongoose",
    "NodeJS",
    "Express",
    "Git",
    "AntD",
    "MaterialUI",
    "Bootstrap",
    "AdobeXD",
    "Figma",
  ];

  return (
    <section id="skills" className={classes.skillSectionContainer}>
      <h2>Skills</h2>
      <div className={classes.skillWrapper}>
        {skills.map((cur) => (
          <SkillTag name={cur} />
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
