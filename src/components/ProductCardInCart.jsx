import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ProductCardInCart.css';

export default class ProductCardInCart extends Component {
  constructor(props) {
    super(props);

    const { qntProduct, price } = props;

    this.state = {
      qntProductState: qntProduct,
      totalPrice: qntProduct * price,
    };
  }

  checkPrice = () => {
    const { price } = this.props;
    const { qntProductState } = this.state;
    this.setState({ totalPrice: qntProductState * price });
  }

  handleClickSubtraction = () => {
    this.setState((prevState) => (
      {
        qntProductState: prevState.qntProductState === 0
          ? 0
          : prevState.qntProductState - 1,
      }), () => this.checkPrice());
  };

  handleClickSum = () => {
    this.setState((prevState) => (
      { qntProductState: prevState.qntProductState + 1 }), () => this.checkPrice());
  };

  render() {
    const { thumbnail, title } = this.props;
    const { qntProductState, totalPrice } = this.state;

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
            onClick={ this.handleClickSubtraction }
          >
            -
          </button>
          <p data-testid="shopping-cart-product-quantity">{ qntProductState }</p>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.handleClickSum }
          >
            +
          </button>
        </div>
        <div className="div-card-price">
          <p>
            R$
            { totalPrice }
          </p>
        </div>
      </section>
    );
  }
}

ProductCardInCart.propTypes = {
  qntProduct: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
