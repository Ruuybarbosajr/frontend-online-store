import propTypes from 'prop-types';
import React from 'react';
import CategoryList from '../components/CategoryList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Search from '../components/Search';
import '../styles/Home.css';
import Header from '../components/Header';

const initialPhrase = 'Digite algum termo de pesquisa ou escolha uma categoria.';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
      searchValue: '',
      productList: [],
      createList: false,
      loading: false,
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
    this.setState({ loading: true, createList: true });
    const apiResult = await getProductsFromCategoryAndQuery(category, searchValue);
    const searchResults = apiResult.results;
    this.setState({
      productList: searchResults,
      loading: false,
    });
  }

  handleChange = (event) => {
    const { value, name, type } = event.target;
    this.setState({ [name]: value }, () => this.generateListByCategory(type));
  }

  getAllCategory = async () => {
    this.setState({ categoriesList: await getCategories() });
  }

  renderInitialPhrase = () => (
    <h2 data-testid="home-initial-message">
      { initialPhrase }
    </h2>
  )

  showCartAside = () => {
    const { displayCartAside } = this.state;
    const check = displayCartAside === 'cart-aside' ? 'hiding' : 'cart-aside';
    this.setState({ displayCartAside: check });
  }

  render() {
    const {
      categoriesList,
      searchValue,
      createList,
      productList,
      loading,
    } = this.state;
    const {
      addItem,
      cartItems,
      sumProducts,
    } = this.props;
    return (
      <div>
        <Header
          sumProducts={ sumProducts }
          cartItems={ cartItems }
        />
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
              loading={ loading }
              productList={ productList }
              addItem={ addItem }
              cartItems={ cartItems }
            />
            { !createList && this.renderInitialPhrase() }
          </section>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addItem: propTypes.func.isRequired,
  sumProducts: propTypes.number.isRequired,
  cartItems: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Home;
