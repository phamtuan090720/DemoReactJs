import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  username = "Nguyen";
  isLogin = false;
  /**
   * isLogin = false => Chua login
   * isLogin = true => login
   */

  handleLogin = () => {
    console.log(this.isLogin);
    this.isLogin = true;
    console.log(this.isLogin);
  };

  renderHTML = () => {
    return this.isLogin ? (
      <p>Hello {this.username}</p>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3>*ExampleHandlingEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
