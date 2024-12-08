import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebaseConfig";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";

const ChatsPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [selectedChatName, setSelectedChatName] = useState("");
  const [selectedChatId, setSelectedChatId] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
      setChats([
        { id: "chat1", name: "Чат 1" },
        { id: "chat2", name: "Чат 2" },
        { id: "chat3", name: "Чат 3" },
      ]);
      setLoading(false);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleSelectChat = (chatId) => {
    const selectedChat = chats.find((chat) => chat.id === chatId);
    if (selectedChat) {
      setSelectedChatId(chatId);
      setSelectedChatName(selectedChat.name);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-row">
      <Navbar chats={chats} onSelectChat={handleSelectChat} />
      <div className="flex-1 p-4">
        <div className="flex justify-between p-4 bg-white shadow-md mb-4">
          <h1 className="text-xl font-bold">
            {selectedChatName || "Выберите чат"}
          </h1>
        </div>
        {selectedChatId ? (
          <Chat chatId={selectedChatId} userId={userId} />
        ) : (
          <div className="text-center">Выберите чат для начала общения</div>
        )}
      </div>
    </div>
  );
};

export default ChatsPage;
