import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ProductCardInCart from '../components/ProductCardInCart';
import ShoppingCartIcon from '../shopping-cart.png';
import Header from '../components/Header';

export default class ShoppingCartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  redirectToCheckout = () => {
    this.setState({ redirect: true });
  };

  render() {
    const {
      redirect,
    } = this.state;
    const {
      handleClickSum,
      handleClickSubtraction,
      cartItems,
      sumProducts,
    } = this.props;

    return (
      <div>
        <Header cartItems={ cartItems } />
        {redirect && <Redirect to="/checkout" />}
        { cartItems.length === 0 ? (
          <h3
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h3>
        ) : (
          <section>
            <section>
              <img
                className="shopping-cart-icon"
                src={ ShoppingCartIcon }
                alt="shopping cart"
              />
              <h3>
                Carrinho de Compras
              </h3>
            </section>
            <section>
              { cartItems.map(((producting, index) => (
                <ProductCardInCart
                  key={ index }
                  thumbnail={ producting.image }
                  title={ producting.title }
                  price={ producting.price }
                  qntProduct={ producting.quantity }
                  handleClickSubtraction={ handleClickSubtraction }
                  handleClickSum={ handleClickSum }
                  cartItems={ cartItems }
                  btnSumDisable={ producting.btnSumDisable }
                  btnSubDisable={ producting.btnSubDisable }
                  maxQuantity={ producting.maxQuantity }
                />
              ))) }
            </section>
            <h2>{`Total: ${sumProducts}`}</h2>
            <button
              type="button"
              data-testid="checkout-products"
              onClick={ this.redirectToCheckout }
            >
              Finalizar Compra
            </button>
          </section>
        ) }
      </div>
    );
  }
}

ShoppingCartPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickSubtraction: PropTypes.func.isRequired,
  handleClickSum: PropTypes.func.isRequired,
  sumProducts: PropTypes.number.isRequired,
};
