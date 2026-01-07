import React from "react";

class EventHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {SName : ""};
  }

ChangeHandler =  (e)=>{
this.setState({SName :  e.target.value})
}
  render() {
    return (
      <div>
        <h1>Event Handling</h1>
       Name :  <input type="text" value={this.state.SName} onChange={this.ChangeHandler} />
       <p>this is a {this.state.SName}</p>
      </div>
    );
  }
}
export default EventHandler;
