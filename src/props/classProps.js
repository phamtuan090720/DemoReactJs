import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>*ClassProps</h3>
        <p>
          Username: {this.props.username} - Lop: {this.props.lop}
        </p>
      </div>
    );
  }
}
