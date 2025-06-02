// import React, { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";

// const Chat = ({ token }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const socketRef = useRef(null);
//   const messagesEndRef = useRef(null);
//   const room = "general";

//   useEffect(() => {
//     // Use wss:// in production, ws:// in development
//     const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
//     const backendHost = import.meta.env.VITE_WS_URL || "localhost:8000";
//     const socket = io(`${wsProtocol}://${backendHost}`, {
//       query: { token, room },
//       transports: ["websocket"], // Force websocket transport for reliability
//       secure: wsProtocol === "wss",
//     });
//     socketRef.current = socket;

//     socket.on("connect", () => {
//       // Optionally notify connection
//     });

//     socket.on("chat_history", (msgs) => {
//       setMessages(msgs);
//     });

//     socket.on("chat_message", (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     socket.on("disconnect", () => {
//       // Optionally notify disconnection
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, [token, room]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = () => {
//     if (input.trim() && socketRef.current?.connected) {
//       socketRef.current.emit("chat_message", input.trim());
//       setInput("");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Matchkin Chat</h2>
//       <div className="messages">
//         {messages.map((msg, i) => (
//           <div key={i}>
//             <span className="sender">{msg.sender || "Anonymous"}: </span>
//             <span>{msg.content || msg}</span>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         placeholder="Type your message..."
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default Chat;


import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import "./Chat.css";

const Chat = ({ token, onLogout }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);
  const room = "general";

  useEffect(() => {
    const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
    const backendHost = import.meta.env.VITE_WS_URL || "localhost:8000";
    const socket = io(`${wsProtocol}://${backendHost}`, {
      query: { token, room },
      transports: ["websocket"],
      secure: wsProtocol === "wss",
    });
    socketRef.current = socket;

    socket.on("chat_history", (msgs) => {
      setMessages(msgs);
    });

    socket.on("chat_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Matchkin Chat</h2>
        <button style={{ width: "auto", padding: "8px 16px", background: "#e74c3c" }} onClick={onLogout}>
          Logout
        </button>
      </div>
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
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && sendMessage()}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
