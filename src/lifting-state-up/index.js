import React, { Component } from "react";
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

export default class LiftingStateUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
    };
  }

  handleChangeInfo = () => {
    this.setState({
      username: "Cybersoft",
    });
  };

  handleResetUsername = (username) => {
    this.setState({
      username: username,
    });
  };

  render() {
    return (
      <div>
        <h3>*LiftingStateUp</h3>
        <p>Username: {this.state.username}</p>
        <button className="btn btn-info" onClick={this.handleChangeInfo}>
          Chang Info
        </button>
        <ChildOne
          username={this.state.username}
          resetUsername={this.handleResetUsername}
        />
        <ChildTwo username={this.state.username} />
      </div>
    );
  }
}
