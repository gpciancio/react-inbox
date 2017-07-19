import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import Toolbar from './Toolbar';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: props.messages
    }
  }
  select = (id) => {
    let messageArr = this.state.messages
    let selectedMessage = messageArr.find(message => message.id === id )
    selectedMessage.selected = !selectedMessage.selected
    this.setState({messages:messageArr})
  }
  starred = (id) => {
    let messageArr = this.state.messages
    let selectedMessage = messageArr.find(message => message.id === id )
    selectedMessage.starred = !selectedMessage.starred
    this.setState({messages:messageArr})
}
  render() {
    return (
      <div>
      <Toolbar appState={this.state}/>
      <MessageList starred={this.starred} select={this.select} messages={this.state.messages} />
      </div>
)}
}

export default App;
