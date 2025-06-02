import React, { useEffect, useRef, useState } from 'react';

const Chat = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);
  const messagesEndRef = useRef(null);
  const room = 'general';

  useEffect(() => {
    const wsProtocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const wsUrl = `${wsProtocol}://${window.location.host}/ws/chat/${room}?token=${token}`;
    ws.current = new WebSocket(wsUrl);

    ws.current.onmessage = (e) => {
      try {
        const msg = JSON.parse(e.data);
        setMessages((prev) => [...prev, msg]);
      } catch {
        setMessages((prev) => [...prev, { content: e.data }]);
      }
    };

    return () => ws.current?.close();
  }, [token, room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() && ws.current?.readyState === WebSocket.OPEN) {
      ws.current.send(input.trim());
      setInput('');
    }
  };

  return (
    <div className="container">
      <h2>Matchkin Chat</h2>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i}>
            <span className="sender">{msg.sender || 'Anonymous'}: </span>
            <span>{msg.content || msg}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && sendMessage()}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
