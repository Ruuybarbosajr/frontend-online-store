import React from 'react';
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
    };
  }

  componentDidMount = () => {
    const comentaryList = JSON.parse(localStorage.getItem('comentaryList'));
    this.getingListFromStorage(comentaryList);
  }

  getingListFromStorage = (comentaryList) => {
    this.setState({ comentaryList });
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  sendComentary = () => {
    const { comentary, email, comentaryList, rating } = this.state;
    const savedComentary = { comentary, email, rating };
    this.setState((prevState) => ({
      comentaryList: [...prevState.comentaryList, savedComentary] }));
    console.log(comentaryList);
  }

  sendingListToStorage = (coment) => {
    localStorage.setItem('comentaryList', JSON.stringify(coment));
  }

  printingStars = () => {
    const { stars } = this.state;
    const actualRating = stars;
    return actualRating;
  }

  componentWillUnmount = () => {
    const { comentaryList } = this.state;
    this.sendingListToStorage(comentaryList);
  }

  render() {
    const { comentary,
      email,
      comentaryList,
      rating,
      hover } = this.state;
    return (
      <div>
        <form>
          <h2>Avalie aqui o produto</h2>
          <label id="email-container" htmlFor="email">
            Email:&ensp;
            <input
              className="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="cometary">
            <textarea
              id="comentary"
              data-testid="product-detail-evaluation"
              cols="30"
              rows="10"
              name="comentary"
              value={ comentary }
              onChange={ this.handleChange }
            />
          </label>
          <div>
            {/* Escrevi o código abaixo usando este tutorial: https://www.youtube.com/watch?v=eDw46GYAIDQ */}
            {[...Array(NUMBER_OF_STARS)].map((_star, index) => {
              const ratingValue = index + 1;
              return (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label key="index">
                  <input
                    className="radios"
                    type="radio"
                    name="rating"
                    value={ ratingValue }
                    onClick={ () => this.setState({ rating: ratingValue }) }
                  />
                  <FaStar
                    className="star"
                    color={ ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
                    onMouseEnter={ () => this.setState({ hover: ratingValue }) }
                    onMouseLeave={ () => this.setState({ hover: null }) }
                    size={ 40 }
                    onChange={ this.countingStars }
                  />
                </label>
              );
            })}
          </div>
          <button
            onClick={ this.sendComentary }
            type="button"
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
            </p>
            { [...Array(coment.rating)].map((star, index) => <FaStar key={ index } />) }
          </div>
        ))}
      </div>
    );
  }
}

export default RatingForm;
