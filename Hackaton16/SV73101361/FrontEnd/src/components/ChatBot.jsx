import React, { useState, useEffect } from 'react';
import socket from '../services/socket';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chatResponse', (response) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    });

    socket.on('chatError', (error) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: error }]);
    });

    return () => {
      socket.off('chatResponse');
      socket.off('chatError');
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages((prev) => [...prev, { sender: 'user', text: input }]);
      socket.emit('chatMessage', input);
      setInput('');
    }
  };

  return (
    <div className="w-80 border border-gray-300 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.sender === 'user' ? 'text-right text-blue-600' : 'text-left text-green-600'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1 p-2 border-t border-gray-300"
        />
        <button onClick={handleSendMessage} className="p-2 bg-blue-500 text-white">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
