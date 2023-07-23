import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../login.css";
import axios from "axios";

const Signup = ({ email, setEmail }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., sending data to the backend)
    let userDetails = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:5000/register", userDetails).then((res) => {
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
    });
    console.log("Signup data:", { email, password });
  };

  return (
    <div className={styles.container2}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            className="inp"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className="lbl" htmlFor="password">
            Password
          </label>
          <input
            className="inp"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
