import React from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      className: 'product-card',
    };
  }

  componentDidMount = () => {
    this.highlightCarItems();
  }

  handleClick = (target) => {
    const { addItem } = this.props;
    this.setState({ className: 'highlight' });
    addItem(target);
  }

  highlightCarItems = () => {
    const {
      cartItems,
      title,
    } = this.props;
    if (cartItems.some((item) => item.title === title)) {
      this.setState({ className: 'highlight' });
    }
  }

  render() {
    const {
      title,
      image,
      price,
      id,
      freeShipping,
      maxQuantity,
    } = this.props;
    const { className } = this.state;
    return (
      <div
        data-testid="product"
        className={ className }
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
        { freeShipping && <p data-testid="free-shipping">Frete Grátis</p> }
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          title={ title }
          image={ image }
          price={ price }
          maxquantity={ maxQuantity }
        >
          Comprar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  cartItems: PropType.arrayOf(PropType.object).isRequired,
  maxQuantity: PropType.number.isRequired,
  title: PropType.string.isRequired,
  image: PropType.string.isRequired,
  price: PropType.number.isRequired,
  addItem: PropType.func.isRequired,
  id: PropType.string.isRequired,
  freeShipping: PropType.bool.isRequired,
};

export default ProductCard;
