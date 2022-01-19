import React from 'react';
import CategoryList from './CategoryList';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.getAllCategory();
  }

  getAllCategory = async () => {
    this.setState({ categoriesList: await getCategories() });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <>
        <section>
          Categorias
          { categoriesList.map(({ id, name }) => (
            <CategoryList
              key={ id }
              name="category"
              id={ id }
              nameCategory={ name }
            />)) }
        </section>
        <section>
          <form htmlFor="input">
            <label htmlFor="input">
              <input type="text" />
            </label>
          </form>
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </section>
      </>
    );
  }
}

export default Home;
