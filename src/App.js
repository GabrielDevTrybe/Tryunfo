import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const maxValue = 90;
      const minValue = 0;
      const maxSum = 210;
      if (cardName && cardDescription && cardImage && cardRare
        && cardAttr1 <= maxValue
        && cardAttr1 >= minValue
        && cardAttr2 <= maxValue
        && cardAttr2 >= minValue
        && cardAttr3 <= maxValue
        && cardAttr3 >= minValue
        && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum // tive uma ajuda do Arthur pra diminuir as linhas
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  saveCard = (objetoInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objetoInfo],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: true,
      isSaveButtonDisabled: true,
    });
  };

  excluirCard = (index) => {
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({ data });
    this.setState((prevState) => ({
      hasTrunfo: prevState.data.some((card) => card.cardTrunfo),
    }));
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      data,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveCard }
          hasTrunfo={ hasTrunfo }

        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }

        />

        {
          data.map((e, index) => (
            <div key={ index }>

              <h1 data-testid="name-card">
                {e.cardName}
              </h1>

              <img
                data-testid="image-card"
                src={ e.cardImage }
                alt={ e.cardName }
              />

              <p data-testid="description-card">
                {e.cardDescription}
              </p>

              <p data-testid="attr1-card">
                {e.cardAttr1}
              </p>

              <p data-testid="attr2-card">
                {e.cardAttr2}
              </p>

              <p data-testid="attr3-card">
                {e.cardAttr3}
              </p>

              <p data-testid="rare-card">
                {e.cardRare}
              </p>

              {e.cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : ''}

              <button
                type="button"
                data-testid="delete-button"
                onClick={ this.excluirCard }
              >
                Excluir
              </button>
            </div>
          ))
        }

      </div>
    );
  }
}

export default App;
