import React from 'react';
import PropType from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, image, price } = this.props;
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
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropType.string.isRequired,
  image: PropType.string.isRequired,
  price: PropType.number.isRequired,
};

export default ProductCard;
