import React, { useEffect, useState, useRef } from 'react';

const Chat = ({ token }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(`ws://localhost:8000/ws/chat?token=${token}`);

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onmessage = e => {
      setMessages(prev => [...prev, e.data]);
    };

    ws.current.onerror = e => {
      console.error('WebSocket error:', e);
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.current.close();
    };
  }, [token]);

  const sendMessage = () => {
    if (ws.current && input.trim()) {
      ws.current.send(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={{ maxWidth: 600, margin: '50px auto', padding: 20, backgroundColor: 'white', borderRadius: 8, boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
      <h2>Matchkin Chat</h2>
      <div style={{ height: 300, overflowY: 'auto', border: '1px solid #ddd', padding: 10, marginBottom: 10 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: 8 }}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        style={{ width: '80%', padding: 10 }}
      />
      <button onClick={sendMessage} style={{ width: '18%', marginLeft: '2%' }}>
        Send
      </button>
    </div>
  );
};

export default Chat;
