import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  return (
    <div>
      <Routes>
        <Route pata="/" element={<Chat />}></Route>
        <Route pata="/login" element={<Login />}></Route>
        <Route pata="/register" element={<Register />}></Route>
        <Route pata="/navbar" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
