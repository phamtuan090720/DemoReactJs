import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPeople: [
        { ten: "Nguyen", tuoi: 18 },
        { ten: "Dat", tuoi: 25 },
        { ten: "Bao", tuoi: 35 },
      ],
    };
  }

  renderInfo = () => {
    const { listPeople } = this.state;
    return listPeople.map((item, index) => {
      return (
        <li key={index}>
          Ten: {item.ten} - tuoi: {item.tuoi}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <h3>*ListKeys</h3>
        <ul>{this.renderInfo()}</ul>
      </div>
    );
  }
}
