import React from 'react';

export default class ShoppingCartPage extends React.Component {
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
          <h3
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h3>
        ) : (
          <p>
            { shoppingCart }
          </p>
        ) }
      </div>
    );
  }
}
