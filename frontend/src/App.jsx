import React, { useState, useRef, useEffect } from "react";
import "./index.css";

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi there! How can I assist you?" },
  ]);
  const inputRef = useRef(null);

  const handleSendMessage = () => {
    const inputText = inputRef.current.value;
    if (inputText.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: "user", text: inputText },
    ]);

    // Clear the input field
    inputRef.current.value = "";
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when a new message is added
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chat-messages" id="chatContainer">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === "user" ? "user" : "bot"}`}
          >
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="user-input">
        <input type="text" ref={inputRef} placeholder="Type your message..." />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
