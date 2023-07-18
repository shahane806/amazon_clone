import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal({value}) {
  const[{basket},dispatch] = useStateValue('');
  return (
    <div className="subtotal">
    
            <p>
              Subtotal {basket?.length} items:<br/>
              <strong>₹{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            <Link className="payment" to="/payment"> <button className="checkout__button">
               Checkout
            </button>
            </Link>
    </div>
  );
}

export default Subtotal;
