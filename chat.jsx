import React, { useState } from 'react';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      user: randomUser,
      text: message,
      likes: 0,
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}:</strong> {msg.text}
            <button onClick={() => handleLike(index)}>Like</button> ({msg.likes})
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
