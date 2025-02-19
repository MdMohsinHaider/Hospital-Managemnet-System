import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [activeUser, setActiveUser] = useState("pateint");


  const data =[
    {
        name:"Devil",
        phone:"1234567"
    }
  ]
  
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>
        <div className={styles.toggleContainer}>
        <button 
            className={`${styles.toggleButton} ${activeUser === "Doctor" ? styles.active : ""}`}
            onClick={() => setActiveUser("Doctor")}
          >
            Doctor 
          </button>
          <button 
            className={`${styles.toggleButton} ${activeUser === "patient" ? styles.active : ""}`}
            onClick={() => setActiveUser("pateint")}
          >
            Patient
          </button>
          <button 
            className={`${styles.toggleButton} ${activeUser === "user" ? styles.active : ""}`}
            onClick={() => setActiveUser("user")}
          >
            User
          </button>
        </div>
        <div className={styles.formContainer}>
          <label>Email / Mobile Number</label>
          <input type="text" placeholder="Enter your email or mobile" className={styles.input} />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" className={styles.input} />
          <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
