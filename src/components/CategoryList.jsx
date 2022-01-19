import React, { Component } from 'react';
import PropType from 'prop-types';

export default class CategoryList extends Component {
  render() {
    const { id, name, nameCategory } = this.props;

    return (
      <label
        htmlFor={ id }
        data-testid="category"
      >
        <input
          type="radio"
          name={ name }
          id={ id }
        />
        { nameCategory }
      </label>
    );
  }
}

CategoryList.propTypes = {
  id: PropType.string.isRequired,
  name: PropType.string.isRequired,
  nameCategory: PropType.string.isRequired,
};
