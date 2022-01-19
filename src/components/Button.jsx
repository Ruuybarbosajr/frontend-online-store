import React from 'react';
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          carrinho de compras
        </Link>
      </div>
    );
  }
}
