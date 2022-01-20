import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../shopping-cart.png';

export default class CartIcon extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          <img
            className="shopping-cart-icon"
            src={ ShoppingCartIcon }
            alt="shopping cart"
          />
        </Link>
      </div>
    );
  }
}
