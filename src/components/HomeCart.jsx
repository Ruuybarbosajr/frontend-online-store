import React from 'react';
import PropTypes from 'prop-types';
import '../styles/HomeCart.css';

export default class HomeCart extends React.Component {
  render() {
    const {
      title,
      price,
      qntProduct,
      image,
    } = this.props;
    return (
      <section>
        <div className="div-card-name">
          <img
            className="image-preview"
            src={ image }
            alt={ title }
          />
          <h4>
            { title }
          </h4>
        </div>
        <div className="div-card-qnt">
          <p>{ qntProduct }</p>
        </div>
        <div>
          <p>
            R$
            { qntProduct * price }
          </p>
        </div>
      </section>
    );
  }
}

HomeCart.propTypes = {
  qntProduct: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
