import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ProductCardInCart from '../components/ProductCardInCart';
import ShoppingCartIcon from '../shopping-cart.png';
import Header from '../components/Header';

// const product = [
//   {
//     thumbnail: 'http://http2.mlstatic.com/D_686864-MLB47324643110_092021-O.jpg',
//     title: 'Relogio Feminino Dourado Barato Original Kit Colar E Brincos',
//     price: 129,
//     quantity: 2,
//   },
//   {
//     thumbnail: 'http://http2.mlstatic.com/D_686864-MLB47324643110_092021-O.jpg',
//     title: 'Relogio Feminino Dourado Barato Original Kit Colar E Brincos',
//     price: 49,
//     quantity: 1,
//   },
//   {
//     thumbnail: 'http://http2.mlstatic.com/D_686864-MLB47324643110_092021-O.jpg',
//     title: 'Relogio Feminino Dourado Barato Original Kit Colar E Brincos',
//     price: 89,
//     quantity: 2,
//   },
//   {
//     thumbnail: 'http://http2.mlstatic.com/D_686864-MLB47324643110_092021-O.jpg',
//     title: 'Relogio Feminino Dourado Barato Original Kit Colar E Brincos',
//     price: 10,
//     quantity: 2,
//   },
//   {
//     thumbnail: 'http://http2.mlstatic.com/D_686864-MLB47324643110_092021-O.jpg',
//     title: 'Relogio Feminino Dourado Barato Original Kit Colar E Brincos',
//     price: 125,
//     quantity: 1,
//   },
// ];

export default class ShoppingCartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isCartEmpty: false,
      redirect: false,
    };
  }

  componentDidMount() {
    this.checkCart();
  }

  checkCart = () => {
    const { cartItems } = this.props;
    if (cartItems.length === 0) {
      this.setState({ isCartEmpty: true });
    }
  }

   redirectToCheckout = () => {
     this.setState({ redirect: true });
   };

   render() {
     const {
       isCartEmpty,
       redirect,
     } = this.state;
     const {
       handleClickSum,
       handleClickSubtraction,
       cartItems,
     } = this.props;

     return (
       <div>
         <Header cartItems={ cartItems } />
         {redirect && <Redirect to="/checkout" />}
         { isCartEmpty ? (
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
                   maxQuantity={ producting.maxQuantity }
                 />
               ))) }
             </section>
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
};
