import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey there! How can I help you today?",
    },
  ]);

  const [email, setEmail] = useState("");
  return (
    <div>
      <Navbar setMessages={setMessages} />
      <Routes>
        <Route
          path="/"
          element={
            <Chat messages={messages} setMessages={setMessages} email={email} />
          }
        ></Route>
        <Route
          path="/login"
          element={<Login email={email} setEmail={setEmail} />}
        ></Route>
        <Route
          path="/signup"
          element={<Signup email={email} setEmail={setEmail} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
