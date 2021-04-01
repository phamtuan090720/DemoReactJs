import React, { Component } from "react";
import data from "./data.json";

export default class ExampleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: data,
    };
  }

  renderHTML = () => {
    const { listMovie } = this.state;
    return listMovie.map((item) => {
      return (
        <div key={item.maPhim} className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src={item.hinhAnh} alt="" />
            <div className="card-body">
              <h4 className="card-title">{item.tenPhim}</h4>
              <p className="card-text">{item.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3>*ExampleMovie</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
