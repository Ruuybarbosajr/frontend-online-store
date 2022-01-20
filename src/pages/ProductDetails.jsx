import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import '../styles/ProductDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      objProduct: '',
    };
  }

  componentDidMount() {
    this.handleGetProductFromId();
  }

  handleGetProductFromId = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const data = await response.json();
    this.setState({ objProduct: data });
  }

  render() {
    const { objProduct } = this.state;
    const { addItem } = this.props;
    return (
      <div>
        <Header />
        <h1
          data-testid="product-detail-name"
        >
          { `${objProduct.title} - R$ ${objProduct.base_price}` }
        </h1>
        <img src={ objProduct.thumbnail } alt={ objProduct.title } />
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
