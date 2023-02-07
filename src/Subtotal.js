import React from "react";
import "./Subtotal.css";

function Subtotal({value}) {
  return (
    <div className="subtotal">
    
            <p>
              Subtotal 0 items:<br/>
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            <button className="checkout__button">
                Checkout
            </button>
          
    </div>
  );
}

export default Subtotal;
