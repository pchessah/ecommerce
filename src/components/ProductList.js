import React, { Component } from "react";
import Product from "./Product";

import { ProductConsumer } from "../context";

class ProductList extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
         
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
