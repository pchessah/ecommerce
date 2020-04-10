import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>product list page</h3>
        <Product />
      </div>
    );
  }
}

export default ProductList;
