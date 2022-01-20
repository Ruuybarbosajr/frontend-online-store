import React from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { title, image, price, addItem } = this.props;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <span>{ title }</span>
        <img
          className="product-image"
          src={ image }
          alt={ title }
        />
        <span>{ price }</span>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addItem }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropType.string.isRequired,
  image: PropType.string.isRequired,
  price: PropType.number.isRequired,
  addItem: PropType.func.isRequired,
};

export default ProductCard;
