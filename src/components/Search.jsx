import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import '../styles/Search.css';

const productNotFoundPhrase = 'Nenhum produto foi encontrado';

class Search extends React.Component {
  renderProductList = () => {
    const { productList, addItem } = this.props;
    if (productList.length === 0) {
      return (
        <span>
          { productNotFoundPhrase }
        </span>
      );
    }
    return (
      productList.map((product) => (
        <Link
          to={ `/productDetails/${product.id}` }
          data-testid="product-detail-link"
          key={ product.id }
          title={ product.title }
          image={ product.thumbnail }
          price={ product.price }
        >
          <ProductCard
            key={ product.id }
            title={ product.title }
            image={ product.thumbnail }
            price={ product.price }
            addItem={ addItem }
          />
        </Link>
      ))
    );
  }

  render() {
    const { searchingForProducts,
      handleChange,
      searchValue,
      createList,
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
        <button
          type="button"
          data-testid="query-button"
          onClick={ searchingForProducts }
        >
          Pesquisar
        </button>
        <div className="itens-list">
          { createList && this.renderProductList() }
        </div>

      </div>
    );
  }
}

Search.propTypes = {
  searchValue: propTypes.string.isRequired,
  searchingForProducts: propTypes.func.isRequired,
  createList: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
  productList: propTypes.arrayOf(
    propTypes.object,
  ).isRequired,
};

export default Search;
