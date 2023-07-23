import React, { useState, useRef } from "react";
import "../index.css";

function Chat({ messages, setMessages }) {
  // console.log(messages, setMessages);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const inputText = inputRef.current.value;
    if (inputText.trim() === "") return;

    setLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: inputText },
    ]);

    try {
      const email = localStorage.getItem("email");
      let splice_data = messages.slice(1);
      const chat_history = [
        ...splice_data,
        { role: "user", content: inputText },
      ];
      const response = await fetch("http://localhost:5000/gpt4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ user_input: chat_history, email }),
      });
      const data = await response.json();
      console.log(chat_history);
      if (data.message) alert(data.message);

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: data.content },
      ]);
    } catch (error) {
      console.error("Error:", error);
      alert(error);
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
        <form onSubmit={(e) => handleSendMessage(e)} className="user-input">
          <input
            type="text"
            ref={inputRef}
            placeholder="Type your message..."
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
