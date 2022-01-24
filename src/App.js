import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCartPage from './pages/ShoppingCartPage';
import './index.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  handleClickSubtraction = (event) => {
    const { title } = event.target.attributes;
    const { cartItems } = this.state;
    const item = cartItems.find((itemCart) => itemCart.title === title.value);
    item.quantity -= 1;
    item.btnSumDisable = false;
    if (item.quantity < 1) {
      item.btnSubDisable = true;
    }
    this.setState({ cartItems });
  };

  handleClickSum = (event) => {
    const { title } = event.target.attributes;
    const { cartItems } = this.state;
    const item = cartItems.find((itemCart) => itemCart.title === title.value);
    item.quantity += 1;
    item.btnSubDisable = false;
    if (Number(item.quantity) === Number(item.maxQuantity)) {
      item.btnSumDisable = true;
    }

    this.setState({ cartItems });
  };

  addItem(event) {
    const { title, image, price, maxQuantity } = event.target.attributes;

    const { cartItems } = this.state;

    if (
      cartItems.some((item) => item.title === title.value)
    ) {
      const item = cartItems.find((itemCart) => itemCart.title === title.value);
      item.quantity += 1;
      this.setState({ cartItems });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, {
          title: title.value,
          image: image.value,
          price: Number(price.value),
          quantity: 1,
          maxQuantity: maxQuantity.value,
          btnSumDisable: false,
          btnSubDisable: false,
        }],
      }));
    }
  }

  render() {
    const { cartItems } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/shopping-cart"
              render={ () => (
                <ShoppingCartPage
                  handleClickSubtraction={ this.handleClickSubtraction }
                  handleClickSum={ this.handleClickSum }
                  cartItems={ cartItems }
                />) }
            />
            <Route
              exact
              path="/"
              render={ () => (
                <Home
                  addItem={ this.addItem }
                  cartItems={ cartItems }
                />) }
            />
            <Route
              exact
              path="/productDetails/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  addItem={ this.addItem }
                  cartItems={ cartItems }
                />) }
            />
            <Route
              exact
              path="/checkout"
              // render={ () => (
              //   <Checkout cartItems={ cartItems } />
              // ) }
            >
              <Checkout cartItems={ cartItems } />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
