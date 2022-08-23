import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-name">
          Nome da Carta
          <input
            data-testid="name-input"
            type="text"
          />
        </label>

        <br />
        <br />

        <div>
          <label htmlFor="input-description">
            Descrição
            <br />
            <textarea
              data-testid="description-input"
              type="text-area"
            />
          </label>
        </div>

        <br />
        <br />

        <label htmlFor="input-number1">
          Primeiro Atributo
          <input
            data-testid="attr1-input"
            type="number"
          />
        </label>

        <br />

        <label htmlFor="input-number2">
          Segundo Atributo
          <input
            data-testid="attr2-input"
            type="number"
          />
        </label>

        <br />

        <label htmlFor="input-number3">
          Terceiro Atributo
          <input
            data-testid="attr3-input"
            type="number"
          />
        </label>

        <br />
        <br />

        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            type="text"
          />
        </label>

        <br />
        <br />

        <label htmlFor="rare-input">
          Raridade
          <select data-testid="rare-input">
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
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>

        <br />
        <br />

        <button type="button" data-testid="save-button"> Salvar </button>

      </form>
    );
  }
}

export default Form;
