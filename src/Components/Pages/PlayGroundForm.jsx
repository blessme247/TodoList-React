import React, { useState } from "react";
import styles from "./playground.module.css";

const PlayGroundForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = () => {
    setisSubmitting(true);
    console.log("Submitting form");
    console.log(`${username} - ${password}`);
    setTimeout(() => {
      setisSubmitting(false);
      console.log("form submitted");
    }, 4000);
  };

  return (
    <div className={styles.container}>
      <form className={`${styles.form} ${styles.container}`}>
        <input className={styles.input}
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input className={styles.input}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePasswordChange}
        />

        {/* Button is disabled when the user is submitting to prevent a situation whereby the user submits multiple times..
        A perfect scenario could be a payemnt form, and we want to prevent a scenario whereby when the user clicks on submit,
        and the network is bad, the user is prevented from submitting multiple times to avoid multiple debits */}
        <button className={styles.submitBtn} disabled={isSubmitting} type="button" onClick={handleSubmit}>
          {isSubmitting ? "Loading" : "Login"}
        </button>
      </form>

         {/* In a real application, this could be represented as a modal to show that the form is being submitted */}
      {isSubmitting ? (
        <h3>Form is submitting, please don't close this window </h3>
      ) : null}

         {username && <p>Your username is: {username}</p>}
         {/* When the user inputs a username, this should be displayed */}
        <p>Your password is: {password.slice(0, 3)}***</p>
    </div>
  );
};

export default PlayGroundForm;
