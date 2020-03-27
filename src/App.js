import React, { Component } from "react";
import MessageList from "./components/MessageList";
import RoomList from "./components/RoomList";
import SendMessageForm from "./components/SendMessageForm";
import NewRoomForm from "./components/NewRoomForm";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}
