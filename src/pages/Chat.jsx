import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const Chat = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const room = "general";

  useEffect(() => {
    const backendHost = import.meta.env.VITE_WS_URL || "localhost:8000";
    const socket = io(`ws://${backendHost}`, {
      query: { token, room }
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      // Connected!
    });

    socket.on("chat_history", (msgs) => {
      setMessages(msgs);
    });

    socket.on("chat_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("disconnect", () => {
      // Disconnected!
    });

    return () => {
      socket.disconnect();
    };
  }, [token, room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() && socketRef.current?.connected) {
      socketRef.current.emit("chat_message", input.trim());
      setInput("");
    }
  };

  return (
    <div className="container">
      <h2>Matchkin Chat</h2>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i}>
            <span className="sender">{msg.sender || "Anonymous"}: </span>
            <span>{msg.content || msg}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
