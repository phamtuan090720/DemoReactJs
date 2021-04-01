import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP",
        },
        {
          id: 2,
          name: "hao",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP",
        },
      ],
      userEdit: null,
      keyword: "",
    };
  }

  _findIndex = (id) => {
    return this.state.userList.findIndex((user) => {
      return user.id === id;
    });
  };

  handleDelete = (user) => {
    const index = this._findIndex(user.id);
    let userList = [...this.state.userList];
    if (index !== -1) {
      userList.splice(index, 1);
      this.setState({
        userList,
      });
    }
  };

  handleOnSumit = (user) => {
    let userList = [...this.state.userList];
    if (user.id) {
      //UPDATE
      const index = this._findIndex(user.id);
      if (index !== -1) userList[index] = user;
    } else {
      //ADD
      const userNew = { ...user, id: Math.random() };
      userList = [...this.state.userList, userNew];
    }

    this.setState({
      userList,
    });
  };

  handleGetUserEdit = (user) => {
    this.setState({
      userEdit: user,
    });
  };

  handleGetKeyword = (keyword) => {
    this.setState({
      keyword,
    });
  };

  render() {
    let { userList, keyword } = this.state;
    userList = userList.filter((user) => {
      return user.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyword={this.handleGetKeyword} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              });
            }}
          >
            Add User
          </button>
        </div>
        <Users
          userList={userList}
          delete={this.handleDelete}
          getUserEdit={this.handleGetUserEdit}
        />
        <Modal onSubmit={this.handleOnSumit} userEdit={this.state.userEdit} />
      </div>
    );
  }
}

export default Home;
