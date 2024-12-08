import React from "react";

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="bg-white h-auto p-4">
      <h2 className="text-lg font-bold mb-4">Чаты</h2>
      <ul className="space-y-2">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="p-2 hover:bg-gray-200 rounded cursor-pointer"
            onClick={() => onSelectChat(chat.id)}
          >
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
