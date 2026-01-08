import React, { Component } from "react";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: "",
      color: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === "sahil" && this.state.password === "1234") {
      this.setState({
        message: "Valid User",
        color: "green",
      });
    } else {
      this.setState({
        message: "Invalid User",
        color: "red",
      });
    }
  };

  render() {
    return (
      <div className="Form">
      
        <form onSubmit={this.handleSubmit}>
          <div >
              <h1>Login Form</h1>
              <br />
            <input
              type="text"
              placeholder="Enter User Name "
              name="username"
              onChange={this.changeHandler}
            />
            <input
              type="text"
              placeholder="Enter PassWord "
              name="password"
              onChange={this.changeHandler}
            />
            <button type="submit">Login</button>

            <p style={{ color: this.state.color }}>{this.state.message}</p>
          </div>
        </form>
      </div>
    );
  }
}
