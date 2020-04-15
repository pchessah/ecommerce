import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h2>{title}</h2>
                </div>
              </div>
              {/*end title*/}
              {/*product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>model: {title}</h3>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by: <span className="text-uppercase">{company}</span>
                  </h5>
                  <h5 className="text-blue">
                    <strong>
                      price: <span>Ksh.</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Product Details:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/*buttons*/}
                  <Link to="/">
                    <button>Back to products</button>
                  </Link>
                  <button
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                    disabled={inCart ? true : false}
                  >
                    {inCart ? "inCart" : "add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
