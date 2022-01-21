import React from 'react';
import PropTypes from 'prop-types';
import '../styles/RatingForm.css';
import { FaStar } from 'react-icons/fa';

const NUMBER_OF_STARS = 5;

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      comentary: '',
      email: '',
      comentaryList: [],
      rating: null,
      hover: null,
      isTheButtonDisabled: true,
    };
  }

  componentDidMount = () => {
    const { pageId } = this.props;
    const comentaryList = JSON.parse(localStorage.getItem(pageId));
    if (comentaryList) this.getingListFromStorage(comentaryList);
  }

  getingListFromStorage = (comentaryList) => {
    this.setState({ comentaryList });
  }

  handleChange = (event) => {
    const { value, name, type } = event.target;
    this.setState({ [name]: value }, () => (
      type === 'radio' && this.setState({ isTheButtonDisabled: false })));
  }

  sendComentary = () => {
    const { comentary, email, rating } = this.state;
    const savedComentary = { comentary, email, rating };
    this.setState((prevState) => ({
      comentaryList: [...prevState.comentaryList, savedComentary] }));
  }

  componentDidUpdate = () => {
    const { comentaryList } = this.state;
    this.sendingListToStorage(comentaryList);
  }

  sendingListToStorage = (coment) => {
    const { pageId } = this.props;
    localStorage.setItem(pageId, JSON.stringify(coment));
  }

  render() {
    const { comentary,
      isTheButtonDisabled,
      email,
      comentaryList,
      rating,
      hover } = this.state;
    return (
      <div>
        <form>
          <h2>Avalie aqui o produto</h2>
          <label className="email-conteiner" htmlFor="email">
            Email:&ensp;
            <input
              data-testid="product-detail-email"
              className="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <textarea
            data-testid="product-detail-evaluation"
            id="comentary"
            cols="30"
            rows="10"
            name="comentary"
            value={ comentary }
            onChange={ this.handleChange }
          />
          <div>
            {/* Escrevi o código abaixo usando este tutorial: https://www.youtube.com/watch?v=eDw46GYAIDQ */}
            {[...Array(NUMBER_OF_STARS)].map((_star, index) => {
              const ratingValue = index + 1;
              return (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label key={ `${index}-of-stars` }>
                  <input
                    className="radios"
                    type="radio"
                    name="rating"
                    value={ ratingValue }
                    onChange={ this.handleChange }
                    data-testid={ `${index + 1}-rating` }
                  />
                  <FaStar
                    className="star"
                    color={ ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
                    onMouseEnter={ () => this.setState({ hover: ratingValue }) }
                    onMouseLeave={ () => this.setState({ hover: null }) }
                    size={ 40 }
                  />
                </label>
              );
            })}
          </div>
          <button
            data-testid="submit-review-btn"
            onClick={ this.sendComentary }
            type="button"
            disabled={ isTheButtonDisabled }
          >
            Enviar
          </button>
        </form>
        { comentaryList.map((coment) => (
          <div key={ coment.email }>
            <p>
              { coment.email }
              :&ensp;
              { coment.comentary }
              :&ensp;
              { coment.rating }
            </p>
            { [...Array(coment.rating)].map((_star, index) => (
              <FaStar key={ `${index + 1}-printed-rating` } color="#ffc107" />)) }
          </div>
        ))}
      </div>
    );
  }
}

RatingForm.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default RatingForm;
