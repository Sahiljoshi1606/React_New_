import React, { Component } from 'react'
import LoginPage from './LoginPage'
import "./Style.css";

export default class MainApp extends Component {

    constructor(){
        super()
        this.state={
            theme : "light"
        }
    }
ToggleTheme =  () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    });
  };
  render() {
    return (
      <div className={this.state.theme}>
        <button onClick={this.ToggleTheme}>
            {this.state.theme === "light" ? "dark" : "light"}
        </button>
        <LoginPage/>
      </div>
    )
  }
}
