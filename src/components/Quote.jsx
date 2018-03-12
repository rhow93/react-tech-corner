import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/quote.css';

const Quote = props => (
  <div className="quote">
    <Message
      icon="quote left"
      header="A Special Quote:"
      content={props.text}
    />
  </div>
);
Quote.propTypes = {
  text: PropTypes.string,
};
Quote.defaultProps = {
  text: '',
};

export default Quote;