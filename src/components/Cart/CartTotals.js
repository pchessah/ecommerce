import React from "react";
import { Link } from "react-router-dom";

function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart, sendOnWhatsApp } = value;
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
            
              <button onClick={()=>sendOnWhatsApp()}>Whatsapp order</button>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;
