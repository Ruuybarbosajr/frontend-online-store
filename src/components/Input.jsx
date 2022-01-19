import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <section>
        <form htmlFor="input">
          <label htmlFor="input">
            <input type="text" />
          </label>
        </form>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria
        </h2>
      </section>
    );
  }
}

export default Input;
