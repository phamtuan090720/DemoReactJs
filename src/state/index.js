import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
      isLogin: false,
    };
    // this.handleLogin = this.handleLogin.bind(this);
  }
  /**
   * isLogin = false => Chua login
   * isLogin = true => login
   */

  handleLogin = () => {
    this.setState({
      isLogin: true,
    });
  };
  //   handleLogin() {
  //     this.setState({
  //       isLogin: true,
  //     });
  //   }

  renderHTML = () => {
    return this.state.isLogin ? (
      <p>Hello {this.state.username}</p>
    ) : (
      <button className="btn btn-success" onClick={this.handleLogin}>
        Login
      </button>
    );
  };

  render() {
    return (
      <div>
        <h3>*State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
