import React from 'react';
import propTypes from 'prop-types';
import ProductCard from './ProductCard';
import Loading from './Loading';
import '../styles/Search.css';

const productNotFoundPhrase = 'Nenhum produto foi encontrado';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      selector: '',
    };
  }

  handleSelector = (event) => {
    const { value } = event.target;
    this.setState({ selector: value });
  }

  renderProductList = () => {
    const {
      productList,
      addItem,
      cartItems,
    } = this.props;
    const { selector } = this.state;
    if (productList.length === 0) {
      return (
        <h2>
          { productNotFoundPhrase }
        </h2>
      );
    }
    if (selector === 'Maior preço') productList.sort((a, b) => b.price - a.price);
    if (selector === 'Menor preço') productList.sort((a, b) => a.price - b.price);
    return (
      productList.map((product) => (
        <ProductCard
          key={ product.id }
          cartItems={ cartItems }
          title={ product.title }
          image={ product.thumbnail }
          price={ product.price }
          maxQuantity={ product.available_quantity }
          addItem={ addItem }
          id={ product.id }
          freeShipping={
            product.shipping
            && product.shipping.free_shipping
          }
        />
      ))
    );
  }

  render() {
    const { searchingForProducts,
      handleChange,
      searchValue,
      createList,
      loading,
    } = this.props;

    return (
      <div className="search-block">
        <input
          className="search-bar"
          data-testid="query-input"
          onChange={ handleChange }
          value={ searchValue }
          name="searchValue"
        />
        <select onChange={ this.handleSelector }>
          <option>Mais relevante</option>
          <option>Maior preço</option>
          <option>Menor preço</option>
        </select>
        <button
          type="button"
          data-testid="query-button"
          onClick={ searchingForProducts }
        >
          Pesquisar
        </button>
        <div className="items-list">
          { loading ? <Loading /> : createList && this.renderProductList() }
        </div>

      </div>
    );
  }
}

Search.propTypes = {
  cartItems: propTypes.arrayOf(propTypes.object).isRequired,
  searchValue: propTypes.string.isRequired,
  searchingForProducts: propTypes.func.isRequired,
  createList: propTypes.bool.isRequired,
  loading: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
  addItem: propTypes.func.isRequired,
  productList: propTypes.arrayOf(
    propTypes.object,
  ).isRequired,
};

export default Search;
