import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCardInCart.css';

export default class ProductCardInCart extends Component {
  render() {
    const {
      thumbnail,
      title,
      qntProduct,
      handleClickSubtraction,
      handleClickSum,
      price,
    } = this.props;

    return (
      <section className="card-product">
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div className="div-card-name">
          <h4 data-testid="shopping-cart-product-name">
            { title }
          </h4>
        </div>
        <div className="div-card-qnt">
          <button
            type="button"
            data-testid="product-decrease-quantity"
            title={ title }
            onClick={ handleClickSubtraction }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ qntProduct }</p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            title={ title }
            onClick={ handleClickSum }
          >
            +
          </button>
        </div>
        <div className="div-card-price">
          <p>
            R$
            { qntProduct * price }
          </p>
        </div>
      </section>
    );
  }
}

ProductCardInCart.propTypes = {
  handleClickSubtraction: PropTypes.func.isRequired,
  handleClickSum: PropTypes.func.isRequired,
  qntProduct: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
