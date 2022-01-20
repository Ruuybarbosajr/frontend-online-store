import React from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, image, price, addItem, id } = this.props;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <Link
          to={ `/productDetails/${id}` }
          data-testid="product-detail-link"
          key={ id }
        >
          <span>{ title }</span>
          <img
            className="product-image"
            src={ image }
            alt={ title }
          />
          <span>{ price }</span>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addItem }
          title={ title }
          image={ image }
          price={ price }
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
