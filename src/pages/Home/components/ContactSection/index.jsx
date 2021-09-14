import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  contactContainer: {
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
  contactForm: {
    display: "grid",
    gridGap: "20px",
    gridTemplateColumns: "minmax(100px, 500px)",
    "& > input": {
      border: `2px solid ${theme.colors.base}`,
      background: "transparent",
      padding: "10px 20px",
      fontSize: "1.2rem",
      color: theme.colors.base,
      "&::placeholder": {
        fontSize: "1.2rem",
      },
    },
    "& > textarea": {
      border: `2px solid ${theme.colors.base}`,
      background: "transparent",
      padding: "10px 20px",
      fontSize: "1.2rem",
      minHeight: 200,
      resize: "none",
      color: theme.colors.base,
      "&::placeholder": {
        fontSize: "1.2rem",
      },
    },
    "& > button": {
      background: theme.colors.primary,
      color: theme.colors.background,
      fontSize: "1.2rem",
      fontWeight: 700,
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
    },
  },
}));

function ContactSection() {
  const classes = useStyles();
  return (
    <section id="contact-me" className={classes.contactContainer}>
      <h2>Wanna talk?</h2>
      <form action="" className={classes.contactForm}>
        <input type="text" name="email" placeholder="Please enter your email" />
        <textarea name="message" placeholder="Say hi!"></textarea>
        <button>Send Message</button>
      </form>
    </section>
  );
}

export default ContactSection;
