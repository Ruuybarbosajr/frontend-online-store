import React from 'react';
import PropType from 'prop-types';
import '../styles/ProductCard.css';
import { Link } from 'react-router-dom';

const MAXIMUM_NUMBER_INSTALLMENTS = 10;
const MINIMUM_NUMBER_INSTALLMENTS = 5;
const MINIMUM_VALUE_MORE_INSTALLMENTS = 150;
const MINIMUM_AMOUNT_INSTALL = 50;

class ProductCard extends React.Component {
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
    const { title, image, price, addItem, id, freeShipping, maxQuantity } = this.props;
    return (
      <section className="container-product-card">
        <div data-testid="product" className="product-card">
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
          onClick={ addItem }
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
  maxQuantity: PropType.number.isRequired,
  title: PropType.string.isRequired,
  image: PropType.string.isRequired,
  price: PropType.number.isRequired,
  addItem: PropType.func.isRequired,
  id: PropType.string.isRequired,
  freeShipping: PropType.bool.isRequired,
};

export default ProductCard;
