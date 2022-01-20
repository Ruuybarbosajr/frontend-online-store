import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </BrowserRouter>
    </div>
  );
}

export default App;
