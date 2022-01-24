import React from 'react';
import '../styles/Checkout.css';
import propTypes from 'prop-types';
import CartItem from '../components/CartItem';
import PurchaseForm from '../components/PurchaseForm';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    const { cartItems } = props;
    this.state = {
      shoppingCart: cartItems,
      sum: 0,
    };
    this.reassignSum = this.reassignSum.bind(this);
  }

  componentDidMount() {
    this.reassignSum();
  }

  reassignSum() {
    const {
      shoppingCart,
    } = this.state;
    shoppingCart.map((product) => (
      this.setState(
        (prevState) => ({ sum: prevState.sum + (product.price * product.quantity) }),
      )));
  }

  render() {
    const {
      shoppingCart,
      sum,
    } = this.state;

    return (
      <div>
        <section>
          { shoppingCart.map((product) => (
            <CartItem
              key={ product.productId }
              productImage={ product.image }
              productName={ product.title }
              productPrice={ product.price }
              productQuantity={ product.quantity }
            />
          ))}
          <p>{`Total: ${sum}`}</p>
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
