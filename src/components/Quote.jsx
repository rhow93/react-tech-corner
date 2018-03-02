import React from 'react';
import { Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

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
  text: PropTypes.string.isRequired,
};

export default Quote;