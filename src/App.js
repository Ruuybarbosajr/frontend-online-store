import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCartPage from './pages/ShoppingCartPage';
import './index.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCartPage } exact />
          <Route exact path="/" component={ Home } />
          <Route exact path="/productDetails/:id" component={ ProductDetails } />
          <Route exact path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
