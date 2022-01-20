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

  addItem({ target: { parentElement } }) {
    const title = parentElement.firstChild.innerText;
    const thumbnail = parentElement.children[1].src;
    const price = Number(parentElement.children[2].innerText);

    const { cartItems } = this.state;

    if (
      cartItems.some((item) => item.title === title)
    ) {
      const item = cartItems.find((itemCart) => itemCart.title === title);
      item.quantity += 1;

      this.setState({ cartItems });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, {
          title,
          thumbnail,
          price,
          quantity: 1,
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
              render={ () => <ShoppingCartPage cartItems={ cartItems } /> }
            />
            <Route exact path="/" render={ () => <Home addItem={ this.addItem } /> } />
            <Route exact path="/productDetails/:id" compponet={ ProductDetails } />
            <Route exact path="/checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
