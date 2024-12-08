import React, { useState, useEffect } from "react";
import { sendMessage, getMessages } from "../services/messageService";

const Chat = ({ chatId, userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    getMessages(chatId, setMessages);
  }, [chatId]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      await sendMessage(chatId, newMessage.trim(), userId);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[90%]">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 ${msg.senderId === userId ? "text-right" : ""}`}
          >
            <span
              className={`font-bold ${
                msg.senderId === userId ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {msg.senderId}:
            </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border rounded p-2"
          placeholder="Type a message"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-blue-500 text-white rounded p-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
