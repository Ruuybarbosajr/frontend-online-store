import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '../shopping-cart.png';
import '../styles/CartIcon.css';
import CartPreview from './CartPreview';

export default class CartIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      cartPreviewClass: 'hiding-cart-preview',
    };
  }

  render() {
    const { cartItems, sumProducts } = this.props;
    const { cartPreviewClass } = this.state;
    return (
      <div
        onMouseEnter={ () => this.setState({ cartPreviewClass: 'display-cart-preview' }) }
        onMouseLeave={ () => this.setState({ cartPreviewClass: 'hiding-cart-preview' }) }
      >
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
        <CartPreview
          cartItems={ cartItems }
          sumProducts={ sumProducts }
          className={ cartPreviewClass }
        />
      </div>
    );
  }
}

CartIcon.propTypes = {
  sumProducts: propTypes.number.isRequired,
  cartItems: propTypes.arrayOf(propTypes.object).isRequired,
};
