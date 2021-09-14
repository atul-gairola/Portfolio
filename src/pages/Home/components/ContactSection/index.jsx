import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";

const useStyles = createUseStyles((theme) => ({
  contactContainer: {
    padding: "200px 0",
    textAlign: "center",
    height: "100vh",
    marginBottom: 50,
    marginTop: 100,
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
    gridGap: "10px",
    gridTemplateColumns: "minmax(100px, 500px)",
    "& > input": {
      border: `2px solid ${theme.colors.base}`,
      background: "transparent",
      padding: "10px 20px",
      fontSize: "1.2rem",
      color: theme.colors.base,
      marginBottom: 20,
      "&::placeholder": {
        fontSize: "1.2rem",
      },
    },
    "& > textarea": {
      border: `2px solid ${theme.colors.base}`,
      background: "transparent",
      padding: "10px 20px",
      fontSize: "1.2rem",
      marginBottom: 10,
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
      padding: "20px 20px",
      border: "none",
      cursor: "pointer",
    },
  },
  disabled: {
    opacity: 0.7,
    cursor: "default",
  },
}));

function ContactSection() {
  const classes = useStyles();
  const theme = useTheme();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    const isEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return isEmail;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.from_name || !formData.message || !formData.from_email) {
      toast.error("Please fill out the fields to send a message!");
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.from_email)) {
      toast.error("Oops! The email doesn't seem right");
      setLoading(false);
      return;
    }
    console.log(formData);
    try {
      await emailjs.send(
        "service_6j5gsp9",
        "template_t2qi6tc",
        formData,
        "user_74rxQxtPaNP282nwgMcpc"
      );
      toast.success("Wohoo! Message sent successfully.");
      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (e) {
      console.log(e);
      toast.error(
        "Some error occured while sending your message! Please try after sometime."
      );
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <section id="contact-me" className={classes.contactContainer}>
        <h2>Wanna talk?</h2>
        <form onSubmit={handleSubmit} className={classes.contactForm}>
          <label style={{ textAlign: "left" }}>Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Please give your name"
            onChange={handleInputChange}
            value={formData.from_name}
          />
          <label style={{ textAlign: "left" }}>Email</label>
          <input
            type="text"
            name="from_email"
            placeholder="Please enter your email"
            onChange={handleInputChange}
            value={formData.from_email}
          />
          <label style={{ textAlign: "left" }}>Message</label>
          <textarea
            onChange={handleInputChange}
            name="message"
            placeholder="Say hi!"
            value={formData.message}
          ></textarea>
          <button type="submit" className={loading && classes.disabled}>
            Send Message
          </button>
        </form>
      </section>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default ContactSection;
