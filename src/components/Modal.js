import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal, increment, decrement } = value;
          const { img, title, price, count, id } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h6>{title}</h6>
                      <h6 className="text-muted">price : Ksh. {price}</h6>
                      <Link to="/">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => closeModal()}
                          style={{ margin: "1rem" }}
                        >
                          <h5>Continue Shopping</h5>
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="btn btn-outline-success"
                          onClick={() => closeModal()}
                        >
                          <h5>Go to Cart</h5>
                        </button>
                      </Link>
                      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">
                          <span
                            className="btn btn-black mx-1"
                            onClick={() => decrement(id)}
                          >
                            -
                          </span>
                          <span className="btn btn-black mx-1">{count}</span>
                          <span
                            className="btn btn-black mx-1"
                            onClick={() => increment(id)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
  }
`;
