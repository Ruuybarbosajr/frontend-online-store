import React from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

const MAXIMUM_NUMBER_INSTALLMENTS = 10;
const MINIMUM_NUMBER_INSTALLMENTS = 5;
const MINIMUM_VALUE_MORE_INSTALLMENTS = 150;
const MINIMUM_AMOUNT_INSTALL = 50;

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

  installments = (price) => (price >= MINIMUM_VALUE_MORE_INSTALLMENTS
    ? `${MAXIMUM_NUMBER_INSTALLMENTS}x de ${(
      price / MAXIMUM_NUMBER_INSTALLMENTS
    ).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })} sem juros no cartão de crédito`
    : `${MINIMUM_NUMBER_INSTALLMENTS}x de ${(
      price / MINIMUM_NUMBER_INSTALLMENTS
    ).toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })} sem juros no cartão de crédito`);

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
      <section className="container-product-card">
        <div data-testid="product" className={ `product-card ${className}` }>
          <Link
            to={ `/productDetails/${id}` }
            data-testid="product-detail-link"
            key={ id }
          >
            <div className="img-card-product">
              <img src={ image } alt={ title } />
            </div>
            <div className="data-card-product">
              <h3>
                { title }
              </h3>
              <p>
                { price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }) }
              </p>
              <p>
                {
                  price <= MINIMUM_AMOUNT_INSTALL
                    ? `1x de ${price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL',
                    })} sem juros no cartão de crédito`
                    : this.installments(price)
                }
              </p>
              { freeShipping && (
                <p data-testid="free-shipping" className="frete-gratis">
                  Frete Grátis
                </p>
              ) }
            </div>
          </Link>
        </div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
          title={ title }
          image={ image }
          price={ price }
          maxquantity={ maxQuantity }
          className="btn-card-product"
        >
          Comprar
        </button>
      </section>
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
