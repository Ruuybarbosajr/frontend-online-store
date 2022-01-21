import React from 'react';
import '../styles/Checkout.css';
import CartItem from '../components/CartItem';
import PurchaseForm from '../components/PurchaseForm';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <section>
          <CartItem
            productImage="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000"
            productName="iPhone 11"
            productPrice="9999"
          />
          <p>Total: R$9999</p>
        </section>
        <PurchaseForm />
      </div>
    );
  }
}

export default Checkout;
