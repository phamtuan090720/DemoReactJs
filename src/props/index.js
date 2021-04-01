import React, { Component } from "react";
import ClassProps from "./classProps";
import FunctionProps from "./functionProps";
import ChildrenProps from "./childrenProps";

export default class Props extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Nguyen",
      lop: "FE52E",
    };
  }

  handleChangeInfo = () => {
    this.setState({
      username: "Cybersoft",
      lop: "Fe52EE",
    });
  };

  render() {
    return (
      <div>
        <h3>*Props</h3>
        <p>
          Username: {this.state.username} - lop: {this.state.lop}
        </p>
        <button className="btn btn-info" onClick={this.handleChangeInfo}>
          Change Info
        </button>
        <ClassProps username={this.state.username} lop={this.state.lop} />
        <FunctionProps username={this.state.username} lop={this.state.lop} />
        <ChildrenProps>
          <div>
            <h5>Demo Children Props</h5>
            <p>Username: {this.state.username}</p>
            <p>Lop: {this.state.lop}</p>
          </div>
        </ChildrenProps>
      </div>
    );
  }
}
