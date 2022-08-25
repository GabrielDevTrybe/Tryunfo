import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Button from './components/Button';

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
    previewOn: false,
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
          previewOn: true,
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
    data.slice();
    data.splice(index, 1);
    this.setState({ data });
    this.setState((prevState) => ({
      hasTrunfo: prevState.data.some((card) => card.cardTrunfo === true),
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
      previewOn,
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
          previewOn === true && data.map((e) => (<Card
            key="id"
            cardName={ e.cardName }
            cardDescription={ e.cardDescription }
            cardAttr1={ e.cardAttr1 }
            cardAttr2={ e.cardAttr2 }
            cardAttr3={ e.cardAttr3 }
            cardImage={ e.cardImage }
            cardRare={ e.cardRare }
            cardTrunfo={ e.cardTrunfo }
            isSaveButtonDisabled={ e.isSaveButtonDisabled }
          />))
        }
        <Button
          removeButton={ this.excluirCard }
        />
      </div>
    );
  }
}

export default App;
