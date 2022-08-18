import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>{ headline }</h2>
      </div>
    );
  }
}
// validação das props usando PropTypes
Title.propTypes = {
// A prop recebida dever ser obrigatoriamente uma string
  headline: PropTypes.string.isRequired,
};

export default Title;
