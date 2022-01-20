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
    // console.log(data.attributes);
    this.setState({ objProduct: data });
  }

  render() {
    const { objProduct } = this.state;
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
};

export default ProductDetails;
