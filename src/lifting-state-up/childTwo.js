import React, { Component } from "react";

export default class ChildTwo extends Component {
  render() {
    return (
      <div>
        <h3>*ChildTwo</h3>
        <p>Username: {this.props.username}</p>
      </div>
    );
  }
}
