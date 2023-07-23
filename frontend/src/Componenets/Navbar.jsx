import React, { useState } from "react";
import "../navbar.css"; // We'll create this CSS file in the next step

function Navbar({ setMessages }) {
  console.log(setMessages);
  const [token, setToken] = useState(localStorage.getItem("token"));

  async function handleHistory() {
    const response = await fetch(
      "https://parent-guider-backend.onrender.com/history",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: localStorage.getItem("email") }),
      }
    );

    let history_data = await response.json();
    console.log(history_data);
    if (history_data.success) {
      setMessages(() => history_data.history);
    }
    alert(history_data.message);
  }

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
        <li>
          <button onClick={() => handleHistory()}>History</button>
        </li>
        {token && (
          <button
            className="logout"
            onClick={() => setToken(localStorage.removeItem("token"))}
          >
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
