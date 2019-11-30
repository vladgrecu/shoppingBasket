import React from "react";
import Navbar from "./Components/Navbar";
import MyBasket from "./Components/MyBascket";

import "./App.css";

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      productsFromServer: [],
      myShoppingCart: []
    };
  }
  componentDidMount() {
    fetch("https://d3c7o8x2i12pye.cloudfront.net/alex/test/cleaners.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        data.map(item => (item.count = 1));
        return this.setState({ productsFromServer: data });
      });
  }
  increaseItemCount = product => {
    if (this.state.myShoppingCart.some(item => item.id === product.id)) {
      product.count++;
      this.setState({
        myShoppingCart: [...this.state.myShoppingCart]
      });
    } else {
      this.setState({
        myShoppingCart: [...this.state.myShoppingCart, product]
      });
    }
  };

  decreaseItemCount = product => {
    if (this.state.myShoppingCart.some(item => item.id === product.id)) {
      product.count--;
      if (product.count === 0) {
        product.count = 1;
        let index = this.state.myShoppingCart.indexOf(product);
        this.state.myShoppingCart.splice(index, 1);
      }
      this.setState({
        myShoppingCart: [...this.state.myShoppingCart]
      });
    }
  };
  removeItemFromCart = product => {
    if (this.state.myShoppingCart.some(item => item.id === product.id)) {
      product.count = 1;
      let index = this.state.myShoppingCart.indexOf(product);
      this.state.myShoppingCart.splice(index, 1);
      this.setState({
        myShoppingCart: [...this.state.myShoppingCart]
      });
    }
  };
  removeAllItemsFromCart = () => {
    this.state.myShoppingCart.forEach(item => (item.count = 1));
    this.setState({
      myShoppingCart: []
    });
  };
  render() {
    const myProductsCopy = [...this.state.productsFromServer];
    const myProducts = myProductsCopy.map(product => (
      <div className="item-card" key={product.id}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ height: "120px", width: "70px", margin: "10px" }}
        />
        <p>{product.name}</p>
        <h5>Price: {product.price}$</h5>
        <button
          className="btn-success"
          onClick={() => this.increaseItemCount(product)}
        >
          <i className="fas fa-cart-plus"></i>
        </button>
      </div>
    ));
    return (
      <div className="text-center">
        <Navbar cart={this.state.myShoppingCart} />
        <h4>Product Catalog</h4>
        <div className="product-container">{myProducts}</div>
        <MyBasket
          cart={this.state.myShoppingCart}
          decreaseItemCount={this.decreaseItemCount}
          increaseItemCount={this.increaseItemCount}
          removeItemFromCart={this.removeItemFromCart}
          removeAllItemsFromCart={this.removeAllItemsFromCart}
        />
      </div>
    );
  }
}
