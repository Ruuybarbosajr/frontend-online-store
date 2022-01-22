import React from 'react';
import propTypes from 'prop-types';

export default class CartItem extends React.Component {
  render() {
    const {
      productImage,
      productName,
      productPrice,
      productQuantity,
    } = this.props;
    return (
      <div>
        <img src={ productImage } alt={ productName } />
        <h4>{ productName }</h4>
        <h4>{`R$ ${productPrice}`}</h4>
        <p>{`Quantidade: ${productQuantity}`}</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  productImage: propTypes.string,
  productName: propTypes.string,
  productPrice: propTypes.number,
  productQuantity: propTypes.number,
}.isRequired;
