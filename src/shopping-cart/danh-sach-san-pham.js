import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderHTML = () => {
    const { listProduct } = this.props;
    return listProduct.map((product) => {
      return (
        <SanPham
          key={product.maSP}
          product={product}
          getDetailProduct={this.props.getDetailProduct}
          addCart={this.props.addCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}
