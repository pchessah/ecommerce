import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Form, FormGroup, Input } from "reactstrap";

function CartTotals({ value }) {
  const {
    cartSubTotal,
    cartTax,
    cartTotal,
    clearCart,
    getLinkWhatsapp,
    mobile_no,
    msg,
    url,
  } = value;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className=" btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:</span>
              <strong>Ksh. {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">cart tax:</span>
              <strong>Ksh. {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">Total:</span>
              <strong>Ksh. {cartTotal}</strong>
            </h5>
            <br />
            <hr />
            <div>
              <Form onSubmit ={()=> getLinkWhatsapp(mobile_no, msg)}>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    id="exampleEmail"
                    placeholder="Enter full name"
                    required
                    
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="number"
                    name="phone_no"
                    id="examplePassword"
                    placeholder="Enter phone number"
                    required
                   
                  />
                </FormGroup>
              </Form>
                <a href={url}>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => getLinkWhatsapp(mobile_no, msg)}
                  >
                    Submit Order <FaWhatsapp />
                  </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;
