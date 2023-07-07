import React from "react";
import "./VendingMachine.css";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-description">Choose a snack</div>
      <img
        src="https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/original/products/7309/12556/ams-39-outdoor-snack-drink-vending-machine__28519.1658495606.jpg?c=1"
        alt="vending machine"
      />
      <div className="VendingMachine-links">
        <Link to="/chips">Chips</Link>
        <Link to="/soda">Soda</Link>
        <Link to="/cabbage">Cabbage</Link>
      </div>
    </div>
  );
}

export default VendingMachine;
