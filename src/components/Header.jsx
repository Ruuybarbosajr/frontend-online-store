import React from 'react';
import propTypes from 'prop-types';
import '../styles/Header.css';
import CartIcon from './CartIcon';

class Header extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <header className="header">
        <h1>Frontend Online store</h1>
        <div>

          <div
            data-testid="shopping-cart-size"
            className="shopping-cart-size"
          >
            {cartItems.length !== 0 && cartItems
              .reduce((result, iten) => result + iten.quantity, 0)}
          </div>
        </div>
        <CartIcon />
      </header>
    );
  }
}

Header.propTypes = {
  cartItems: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Header;
