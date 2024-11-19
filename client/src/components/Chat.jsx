import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../redux/actions";
import Message from "./Message";

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Chat</h1>
      <div className="border p-4 rounded">
        {messages.map((msg) => (
          <Message key={msg.id} message={msg} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
