import React from "react";
class ClassProps extends React.Component {
  constructor(props) {
    super(props);
    // super are use for call a parent component which is react.Component

    // using a this keyword we can access a state
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <h2 style={{ color: "green", textAlign: "center" }}>
          {this.props.title}
        </h2>
        <h3 style={{ color: "green", textAlign: "center" }}>
          {this.state.time.toLocaleTimeString()}
        </h3>
        <p style={{ color: "green", textAlign: "center" }}>
          {this.state.time.toLocaleDateString()}
        </p>
      </>
    );
  }
}
export default ClassProps;
     