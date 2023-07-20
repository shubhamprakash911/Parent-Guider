import React, { useState, useRef } from "react";
import "../index.css";

function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "how can i help you !",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSendMessage = async () => {
    const inputText = inputRef.current.value;
    if (inputText.trim() === "") return;

    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: inputText },
    ]);

    try {
      const response = await fetch("http://localhost:5000/gpt4", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ user_input: inputText }),
      });
      const data = await response.json();
      console.log(data);

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: data.content },
      ]);
    } catch (error) {
      console.error("Error:", error);
      // Handle error if needed
    } finally {
      setLoading(false);
      // Clear the input field
      inputRef.current.value = "";
    }
  };

  return (
    <div className="container">
      <div className="chatbot-container">
        <div className="chat-messages" id="chatContainer">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.role === "user" ? "user" : "assistant"
              }`}
            >
              <div className="message-text">{message.content}</div>
            </div>
          ))}
        </div>
        {loading && <div>Loading...</div>}
        <div className="user-input">
          <input
            type="text"
            ref={inputRef}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
