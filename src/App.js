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
      cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
      sumProducts: 0,
    };

    this.addItem = this.addItem.bind(this);
    this.reassignSum = this.reassignSum.bind(this);
  }

  componentDidMount() {
    this.reassignSum();
  }

  componentDidUpdate = () => {
    this.safeInLocalStorage();
  }

  safeInLocalStorage = () => {
    const { cartItems } = this.state;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  handleClickSubtraction = (event) => {
    const { title } = event.target.attributes;
    const { cartItems } = this.state;
    const item = cartItems.find((itemCart) => itemCart.title === title.value);
    item.quantity -= 1;
    if (item.quantity <= 0) {
      cartItems.forEach((product, index) => (
        (product.title === title.value) && cartItems.splice(index, 1)));
    }
    this.setState({ cartItems });
    this.reassignSum();
  };

  handleClickSum = (event) => {
    const { title } = event.target.attributes;
    const { cartItems } = this.state;
    const item = cartItems.find((itemCart) => itemCart.title === title.value);
    item.quantity += 1;
    if (Number(item.quantity) === Number(item.maxQuantity)) {
      item.btnSumDisable = true;
    }
    this.setState({ cartItems });
    this.reassignSum();
  };

  reassignSum() {
    const { cartItems } = this.state;
    const sumProducts = cartItems
      .reduce((acc, product) => acc + (product.price * product.quantity), 0);
    this.setState({ sumProducts });
  }

  async addItem(event) {
    const { title, image, price, maxQuantity } = event.target.attributes;
    const { cartItems } = this.state;

    if (
      cartItems.some((item) => item.title === title.value)
    ) {
      const item = cartItems.find((itemCart) => itemCart.title === title.value);
      item.quantity += 1;
      this.setState({ cartItems });
      this.reassignSum();
    } else {
      return this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, {
          title: title.value,
          image: image.value,
          price: Number(price.value),
          quantity: 1,
          maxQuantity: maxQuantity.value,
          btnSumDisable: false,
        }],
      }), () => this.reassignSum());
    }
  }

  render() {
    const { cartItems, sumProducts } = this.state;

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
                  sumProducts={ sumProducts }
                />) }
            />
            <Route
              exact
              path="/"
              render={ () => (
                <Home
                  addItem={ this.addItem }
                  cartItems={ cartItems }
                  sumProducts={ sumProducts }
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
                  sumProducts={ sumProducts }
                />) }
            />
            <Route
              exact
              path="/checkout"
            >
              <Checkout cartItems={ cartItems } sumProducts={ sumProducts } />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
