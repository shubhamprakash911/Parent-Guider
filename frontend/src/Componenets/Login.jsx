import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../login.css";
import axios from "axios";

const Login = ({ email, setEmail }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., sending data to the backend)
    let userDetails = {
      email: email,
      password: password,
    };

    axios
      .post("https://parent-guider-backend.onrender.com/login", userDetails)
      .then((res) => {
        alert(res.data.message);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);
      });

    console.log("Login data:", { email, password });
  };

  return (
    <div className={styles.container2}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className="lbl" htmlFor="email">
            Email
          </label>
          <input
            className="inp"
            type="email"
            id="email"
            value={email}
            required
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
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
