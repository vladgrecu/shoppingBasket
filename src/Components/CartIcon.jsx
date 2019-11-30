import React from "react";

export default function CartIcon({ cart }) {
  const displayCart = () => {
    const cartContainer = document.getElementById("cart-wrapper");
    cartContainer
      ? cartContainer.classList.toggle("show")
      : console.log("The cart is empty!");
  };
  let nrOfProducts = 0;
  cart.forEach(item => (nrOfProducts += item.count));
  return (
    <div className="cart-icon">
      <i className="fas fa-cart-arrow-down fa-2x " onClick={displayCart}></i>
      {nrOfProducts ? (
        <div className="cart-item-counter fadeIn">{nrOfProducts}</div>
      ) : null}
    </div>
  );
}
