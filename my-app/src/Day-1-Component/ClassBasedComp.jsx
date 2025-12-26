import React from "react";

export default class ClassBasedComp extends React.Component {
  render() {
    var style = {
      margin: "auto",
      textAlign: "center",
      color: "blue",
      fontSize: "30px",
    };

    return <h1 style={style}>this is my class based component</h1>;
  }
}
