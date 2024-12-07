import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebaseConfig";

import Navbar from "../components/Navbar";
import Chat from "../components/Chat";

const ChatsPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();

    navigate("/");
  };

  return (
    <div className="b-black">
      <Navbar />
      <div onClick={handleLogout}>Logout</div>
      <Chat />
    </div>
  );
};

export default ChatsPage;
