import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div>

        <div>
          <h1 data-testid="name-card">
            Card
            {cardName}
          </h1>
        </div>

        <div>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>

        <div>
          <p data-testid="description-card">
            {cardDescription}
          </p>
        </div>

        <div>
          <p data-testid="attr1-card">
            {cardAttr1}
          </p>
        </div>

        <div>
          <p data-testid="attr2-card">
            {cardAttr2}
          </p>
        </div>

        <div>
          <p data-testid="attr3-card">
            {cardAttr3}
          </p>
        </div>

        <div>
          <p data-testid="rare-card">
            {cardRare}
          </p>
        </div>

        <div>
          {cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}
        </div>

      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
