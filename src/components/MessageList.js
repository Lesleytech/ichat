import React from "react";
import Message from "./Message";

export default function MessageList(props) {
  return (
    <div className="message-list">
      {props.messages.map((message, index) => {
        return (
          <Message
            key={index}
            senderId={message.senderId}
            text={message.text}
          />
        );
      })}
    </div>
  );
}
