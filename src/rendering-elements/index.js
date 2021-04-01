import React, { Component } from "react";

export default class RenderingElements extends Component {
  username = "Cybersoft";
  lop = "FE52E";

  renderInfo = () => {
    return (
      <p>
        User: {this.username} - lop: {this.lop}
      </p>
    );
  };

  render() {
    return (
      <div>
        <h3>*RenderingElements</h3>
        <p>
          User: {this.username} - Lop: {this.lop}
        </p>
        {this.renderInfo()}
      </div>
    );
  }
}
