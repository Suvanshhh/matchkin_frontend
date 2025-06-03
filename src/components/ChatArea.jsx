import React, { useRef, useEffect } from "react";

const ChatArea = ({
  messages,
  onSend,
  input,
  setInput,
  userEmail,
  onResetChat // Accept the reset handler as a prop
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="chat-area">
      <div className="messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`bubble ${msg.sender === userEmail ? "own" : ""}`}
          >
            <img
              src="https://i.postimg.cc/TYCs1QXf/neutral.jpg"
              alt="avatar"
              className="avatar-sm"
            />
            <div>
              <span className="sender">{msg.sender || "Anonymous"}</span>
              <div>{msg.content}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="composer"
        onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
        <button
          className="reset-chat-btn"
          type="button"
          onClick={onResetChat} 
        >
          Reset Chat
        </button>
      </form>
    </main>
  );
};

export default ChatArea;
