import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { removeButton } = this.props;
    return (
      <div>
        <button
          name="removeButton"
          data-testid="delete-button"
          type="button"
          onClick={ removeButton }
        >
          Excluir
        </button>
      </div>
    );
  }
}

Button.propTypes = {

  removeButton: PropTypes.func,
}.isRequired;

export default Button;
