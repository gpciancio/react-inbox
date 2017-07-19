import React from 'react';

class Message extends React.Component {

render() {
  return (
<div className={this.props.message.selected ? "selected row message read":"row message read"}>
<div className="col-xs-1">
<div className="row">
<div className="col-xs-2">
<input id ="selectBox" checked={this.props.message.selected === true ? true: false} onChange={()=> this.props.select(this.props.message.id)} type="checkbox" />
</div>
<div className="col-xs-2">
<i className={(this.props.message.starred) ? "star fa fa-star":"star fa fa-star-o"} onClick = {()=> this.props.starred(this.props.message.id)}></i>
</div>
</div>
</div>
<div className="col-xs-11">
<a href='#'>
  {this.props.message.subject}
</a>
</div>
</div>
)
}
}
export default Message;
