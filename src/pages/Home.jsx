import React from 'react';
import Button from '../components/Button';

class Home extends React.Component {
  render() {
    return (
      <section>
        <form htmlFor="input">
          <label htmlFor="input">
            <input type="text" />
          </label>
        </form>
        <Button />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </section>
    );
  }
}

export default Home;
