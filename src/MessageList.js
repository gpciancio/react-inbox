import React from 'react';
import Message from './Message'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }
selectMessage = (event) => {

this.setState = {
  selected: true
}

}
render(){
  return (
    <div>{this.props.messages.map(message =>
      <Message starred={this.props.starred} select={this.props.select} message={message} />
    )}
    </div>
  )}
}
export default MessageList;
