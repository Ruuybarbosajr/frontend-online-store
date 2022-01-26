import React, { Component } from 'react';
import PropType from 'prop-types';
import '../styles/CategoryList.css';

export default class CategoryList extends Component {
  render() {
    const { id, name, nameCategory, onChange } = this.props;

    return (
      <label
        className="aside-item"
        htmlFor={ id }
        data-testid="category"
      >
        <input
          type="radio"
          name={ name }
          id={ id }
          onChange={ onChange }
          value={ id }
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
  onChange: PropType.func.isRequired,
};
