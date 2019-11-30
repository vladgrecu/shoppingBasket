import React from "react";

export default function MyBasket({
  cart,
  decreaseItemCount,
  increaseItemCount,
  removeItemFromCart,
  removeAllItemsFromCart
}) {
  console.log("My Cart: ", cart);
  const myCart = cart.map(item => {
    return (
      <tr className="cart-item" key={item.id}>
        <td className="cart-item-name">
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ height: "36px", width: "21px", margin: "10px" }}
          />
          <h5>{item.name}</h5>
        </td>
        <td className="cart-item-price">{item.price}</td>
        <td className="cart-item-qty">{item.count}</td>
        <td className="cart-item-total">
          {(item.price * item.count).toFixed(2)}
        </td>
        <td className="cart-item-buttons">
          <button
            onClick={() => decreaseItemCount(item)}
            className="btn-secondary"
          >
            <i className="fas fa-minus-square"></i>
          </button>
          <button
            onClick={() => increaseItemCount(item)}
            className="btn-success"
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <button
            onClick={() => removeItemFromCart(item)}
            className="btn-danger remove"
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    );
  });
  let sum = 0;
  cart.forEach(item => (sum += item.price * item.count));
  return (
    <React.Fragment>
      {myCart.length !== 0 ? (
        <div id="cart-wrapper">
          <h2 className="text-center p-3 bg-dark m-0 text-white">
            My Shopping Cart
          </h2>
          <table>
            <thead>
              <tr className="cart-header text-center">
                <th className="cart-item-name">Product</th>
                <th className="cart-item-price">Price</th>
                <th className="cart-item-qty">Qty</th>
                <th className="cart-item-total">Total Price</th>
                <th className="cart-item-buttons"> </th>
              </tr>
            </thead>
            <tbody>{myCart}</tbody>
            <tfoot>
              <tr className="cart-footer text-center">
                <th className="cart-item-name"></th>
                <th className="cart-item-price"></th>
                <th className="cart-item-qty"></th>
                <th className="cart-item-total">{sum.toFixed(2)}$</th>
                <th className="cart-item-buttons">
                  <button
                    className="btn btn-danger"
                    onClick={removeAllItemsFromCart}
                  >
                    <i className="fas fa-trash-alt"></i> All
                  </button>
                  <button className="btn btn-primary ml-4">
                    <i className="fas fa-credit-card"></i> Checkout
                  </button>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : null}
    </React.Fragment>
  );
}
