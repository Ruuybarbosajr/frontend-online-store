import React from 'react';
import Header from '../components/Header';
import '../styles/ProductDetails.css';

class ProductDetails extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>{`${productName} - R$ ${productPrice}`}</h1>
        <img src={ productImage } alt={ productName } />
        <ol>
          <li>{productAttr1}</li>
          <li>{productAttr2}</li>
          <li>{productAttr3}</li>
        </ol>
        <p>{productId}</p>
      </div>
    );
  }
}

export default ProductDetails;
