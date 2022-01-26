import React from 'react';
import propTypes from 'prop-types';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

class Header extends React.Component {
  render() {
    const { cartItems, sumProducts } = this.props;
    return (
      <header className="header">
        <Link to="/"><h1>Frontend Online store</h1></Link>
        <div>

          <div
            data-testid="shopping-cart-size"
            className="shopping-cart-size"
          >
            {cartItems.reduce((result, item) => result + item.quantity, 0)}
          </div>
        </div>
        <CartIcon
          cartItems={ cartItems }
          sumProducts={ sumProducts }
        />
      </header>
    );
  }
}

Header.propTypes = {
  cartItems: propTypes.arrayOf(propTypes.object).isRequired,
  sumProducts: propTypes.number.isRequired,
};

export default Header;
