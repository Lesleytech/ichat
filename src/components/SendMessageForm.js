import React from "react";

export default function SendMessageForm(props) {
  return (
    <form className="send-message-form" onSubmit={props.onSubmit}>
      <input
        placeholder="Type message"
        type="text"
        value={props.message}
        onChange={props.onChange}
      />
    </form>
  );
}
