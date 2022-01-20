import React from 'react';
import '../styles/Header.css';
import ShoppingCart from './ShoppingCart';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Frontend Online store</h1>
        <ShoppingCart />
      </header>
    );
  }
}

export default Header;
