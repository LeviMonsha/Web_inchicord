import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebaseConfig";
import ChatList from "./ChatList";
import AvatarSettings from "../components/settings/AvatarSettings";

export default function Navbar({ chats, onSelectChat }) {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  const user = auth.currentUser;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSettings && event.target.closest(".avatar-settings") == null) {
        setShowSettings(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSettings]);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-600">Inchicord</div>
        <div className="relative">
          <img
            src={user?.photoURL || "/img/default_avatar.gif"}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-purple-600 cursor-pointer"
            onClick={() => setShowSettings((prev) => !prev)}
          />
          {showSettings && (
            <div className="absolute right-30 mt-2 w-[300px] bg-white shadow-lg rounded-lg p-4 z-10 avatar-settings">
              <AvatarSettings onClose={() => setShowSettings(false)} />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="text-red-400 px-4 py-3 hover:text-red-600 transition duration-200"
      >
        Logout
      </button>
      <ChatList chats={chats} onSelectChat={onSelectChat} />
    </nav>
  );
}
