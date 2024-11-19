import React from "react";

const Message = ({ message }) => {
  return (
    <div className="p-2 border-b">
      <strong>{message.sender}: </strong>
      <span>{message.text}</span>
    </div>
  );
};

export default Message;
