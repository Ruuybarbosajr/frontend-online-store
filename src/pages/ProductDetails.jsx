import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '../styles/ProductDetails.css';
import RatingForm from '../components/RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      objProduct: '',
      isFreeShipping: '',
    };
  }

  componentDidMount() {
    this.handleGetProductFromId();
  }

  handleGetProductFromId = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    // console.log(data.shipping.free_shipping);
    this.setState({ objProduct: data, isFreeShipping: data.shipping.free_shipping });
  }

  render() {
    const { objProduct, isFreeShipping } = this.state;
    const { addItem, match: { params: { id } } } = this.props;
    return (
      <div>
        <Header />
        <main>

          <h1
            data-testid="product-detail-name"
          >
            { `${objProduct.title} - R$ ${objProduct.base_price}` }
          </h1>
          <img src={ objProduct.thumbnail } alt={ objProduct.title } />
          {isFreeShipping && <h2 data-testid="free-shipping">Frete Grátis</h2>}
          <ul>
            <li>{ `Quantidade em Estoque: ${objProduct.available_quantity}` }</li>
          </ul>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ addItem }
            title={ objProduct.title }
            image={ objProduct.thumbnail }
            price={ objProduct.base_price }
          >
            Adicionar
          </button>
          <RatingForm pageId={ id } />
        </main>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default ProductDetails;
