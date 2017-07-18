import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }
selectMessage = (messages) => {
console.log('clicked');
}

render(){
  return (
    <div>{this.props.messages.map(e =>
      <div className="row message read">
      <div className="col-xs-1">
      <div className="row">
      <div className="col-xs-2">
      <input id ="selectBox" onClick = {this.selectMessage} type="checkbox" />
      </div>
      <div className="col-xs-2">
      <i className="star fa fa-star-o"></i>
      </div>
      </div>
      </div>
      <div className="col-xs-11">
      <a href='#'>
        {e.subject}
      </a>
      </div>
      </div>
    )}
    </div>
  )}
}
export default MessageList;
