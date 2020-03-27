import React, { Component } from "react";
import MessageList from "./components/MessageList";
import RoomList from "./components/RoomList";
import SendMessageForm from "./components/SendMessageForm";
import NewRoomForm from "./components/NewRoomForm";
import Messages from "./fakeMessageData";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
      user: "John Doe"
    };
  }
  componentDidMount() {
    this.setState({ messages: Messages });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      message: "",
      messages: [
        ...this.state.messages,
        { senderId: this.state.user, text: this.state.message }
      ]
    });
  };
  handleChange = event => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages} />
        <SendMessageForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          message={this.state.message}
        />
        <NewRoomForm />
      </div>
    );
  }
}
