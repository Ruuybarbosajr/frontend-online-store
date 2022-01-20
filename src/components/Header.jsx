import React from 'react';
import '../styles/Header.css';
import CartIcon from './CartIcon';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>Frontend Online store</h1>
        <CartIcon />
      </header>
    );
  }
}

export default Header;
