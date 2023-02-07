import React from "react";
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format'
function Subtotal({ value }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal 0 items:
              <br />
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            <button className="checkout__button">Checkout</button>
          </>
        )}
        decimalScale={2}
        value={value}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
