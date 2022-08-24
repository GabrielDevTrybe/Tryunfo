import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="input-name">
          Nome da Carta
          <input
            name="cardName"
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <div>
          <label htmlFor="input-description">
            Descrição
            <br />
            <textarea
              name="cardDescription"
              data-testid="description-input"
              type="text-area"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <br />
        <br />

        <label htmlFor="input-number1">
          Primeiro Atributo
          <input
            name="cardAttr1"
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max={ 90 }
          />
        </label>

        <br />

        <label htmlFor="input-number2">
          Segundo Atributo
          <input
            name="cardAttr2"
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max={ 90 }

          />
        </label>

        <br />

        <label htmlFor="input-number3">
          Terceiro Atributo
          <input
            name="cardAttr3"
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max={ 90 }
          />
        </label>

        <br />
        <br />

        <label htmlFor="image-input">
          Imagem
          <input
            name="cardImage"
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <label htmlFor="rare-input">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <br />
        <br />

        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            name="cardTrunfo"
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <br />
        <br />

        <button
          name="isSaveButtonDisabled"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick({ cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo }) }
        >
          Salvar
        </button>

      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  // hasTrunfo,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
