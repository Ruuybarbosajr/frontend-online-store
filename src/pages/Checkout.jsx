import React from 'react';
import '../styles/Checkout.css';
import propTypes from 'prop-types';
import CartItem from '../components/CartItem';
import PurchaseForm from '../components/PurchaseForm';

class Checkout extends React.Component {
  render() {
    const { sumProducts, cartItems } = this.props;
    return (
      <div>
        <section>
          { cartItems.map((product) => (
            <CartItem
              key={ product.title }
              productImage={ product.image }
              productName={ product.title }
              productPrice={ product.price }
              productQuantity={ product.quantity }
            />
          ))}
          <p>{`Total: ${sumProducts}`}</p>
        </section>
        <PurchaseForm />
      </div>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  cartItems: propTypes.arrayOf(propTypes.object),
}.isRequired;
