import React from 'react';
import { getProductsFromQuery, getProductsFromCategoryAndQuery } from '../services/api';

const productNotFound = 'Nenhum produto foi encontrado';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      productList: [],
      createList: false,
    };
  }

  getProductsFromQuery = async (query) => fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => data)

  searchingForProducts = async () => {
    const { searchValue } = this.state;
    const apiResult = await getProductsFromCategoryAndQuery('', searchValue);
    const searchResults = apiResult.results;
    this.setState({ productList: searchResults, createList: true });
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  renderProductList = () => {
    const { productList } = this.state;
    if (productList.length === 0) {
      return (
        <span>
          { productNotFound }
        </span>
      );
    }
    return (
      productList.map((product) => (
        <div key={ product.id } data-testid="product">
          <span>{ product.title }</span>
          <img src={ product.thumbnail } alt={ product.title } />
          <span>{ product.price }</span>
        </div>
      ))
    );
  }

  render() {
    const { searchValue, createList } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          onChange={ this.handleChange }
          value={ searchValue }
          name="searchValue"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchingForProducts }
        >
          Pesquisar
        </button>
        {createList && this.renderProductList()}
      </div>
    );
  }
}

export default Search;
