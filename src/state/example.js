import React, { Component } from "react";

export default class ExampleCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgRedCar.jpg",
    };
  }

  handleChangeColor = (img) => {
    this.setState({
      img,
    });
  };

  render() {
    const { img } = this.state;
    return (
      <div className="container">
        <h3>*ExampleCar</h3>
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-danger mr-3"
              onClick={() => {
                this.handleChangeColor("./img/imgRedCar.jpg");
              }}
            >
              Red Color
            </button>
            <button
              className="btn btn-light mr-3"
              onClick={() => {
                this.handleChangeColor("./img/imgSilverCar.jpg");
              }}
            >
              Silver Color
            </button>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.handleChangeColor("./img/imgBlackCar.jpg");
              }}
            >
              Black Color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
