import React from 'react';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      isCartEmpty: false,
      shoppingCart: [],
    };
  }

  componentDidMount() {
    this.checkCart();
  }

  checkCart() {
    const { shoppingCart } = this.state;
    if (shoppingCart.length === 0) {
      this.setState({ isCartEmpty: true });
    }
  }

  render() {
    const { shoppingCart, isCartEmpty } = this.state;
    return (
      <div>
        { isCartEmpty ? (
          <p
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </p>
        ) : (
          <p>
            { shoppingCart }
          </p>
        ) }
      </div>
    );
  }
}
