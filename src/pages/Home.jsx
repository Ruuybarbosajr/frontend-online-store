import React from 'react';
import CategoryList from '../components/CategoryList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';
import CartIcon from '../components/CartIcon';

const initialPhrase = 'Digite algum termo de pesquisa ou escolha uma categoria.';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      searchValue: '',
      productList: [],
      createList: false,
      category: '',
    };
  }

  componentDidMount() {
    this.getAllCategory();
  }

  generateListByCategory = (type) => {
    if (type === 'radio') this.searchingForProducts();
  }

  searchingForProducts = async () => {
    const { searchValue, category } = this.state;
    const apiResult = await getProductsFromCategoryAndQuery(category, searchValue);
    const searchResults = apiResult.results;
    this.setState({ productList: searchResults, createList: true });
  }

  handleChange = (event) => {
    const { value, name, type } = event.target;
    this.setState({ [name]: value }, () => this.generateListByCategory(type));
  }

  handleClickRadio = (event) => {
    console.log(event.target.value);
  }

  getAllCategory = async () => {
    this.setState({ categoriesList: await getCategories() });
  }

  renderInitialPhrase = () => (
    <h2 data-testid="home-initial-message">
      { initialPhrase }
    </h2>
  )

  render() {
    const { categoriesList,
      searchValue,
      createList,
      productList,
    } = this.state;

    return (
      <div className="home">
        <section>
          Categorias
          { categoriesList.map(({ id, name }) => (
            <CategoryList
              key={ id }
              name="category"
              id={ id }
              nameCategory={ name }
              onChange={ this.handleChange }
            />)) }
        </section>
        <section className="search-block">
          <Search
            handleChange={ this.handleChange }
            searchingForProducts={ this.searchingForProducts }
            searchValue={ searchValue }
            createList={ createList }
            productList={ productList }
          />
          { !createList && this.renderInitialPhrase() }
        </section>
        <CartIcon />
      </div>
    );
  }
}

export default Home;
