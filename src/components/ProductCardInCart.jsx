import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCardInCart.css';

export default class ProductCardInCart extends Component {
  render() {
    const {
      thumbnail,
      title,
      handleClickSubtraction,
      handleClickSum,
      price,
      qntProduct,
      btnSumDisable,
      btnSubDisable,
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
            disabled={ btnSubDisable }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ qntProduct }</p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            title={ title }
            onClick={ handleClickSum }
            disabled={ btnSumDisable }
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
  btnSumDisable: PropTypes.bool.isRequired,
  btnSubDisable: PropTypes.bool.isRequired,
  qntProduct: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
