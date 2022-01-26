import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import '../styles/CartPreview.css';
import HomeCart from './HomeCart';

export default class CartPreview extends React.Component {
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
      cartItems,
      sumProducts,
      className,
    } = this.props;
    const { redirect } = this.state;
    return (
      <aside className={ className }>
        {redirect && <Redirect to="/checkout" />}
        { cartItems.length === 0 ? (
          <h5>
            Carrinho está vazio
          </h5>
        ) : (
          <section>
            <h5>
              Carrinho de Compras
            </h5>
            <section>
              { cartItems.map(((product, index) => (
                <HomeCart
                  key={ index }
                  title={ product.title }
                  price={ product.price }
                  qntProduct={ product.quantity }
                  image={ product.image }
                  cartItems={ cartItems }
                />
              ))) }
            </section>
            <h2>{`Total: R$ ${sumProducts}`}</h2>
            <button
              type="button"
              data-testid="checkout-products"
              onClick={ this.redirectToCheckout }
            >
              Finalizar Compra
            </button>
          </section>
        ) }
      </aside>
    );
  }
}

CartPreview.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  sumProducts: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
