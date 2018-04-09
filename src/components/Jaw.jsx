/* eslint-disable function-paren-newline */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import jawSrc from '../styles/assets/trump-mouth.png';

const style = {
  position: 'absolute',
  backgroundColor: 'white',
  cursor: 'move',
};

/**
 * Implements the drag source contract.
 */
const jawSource = {
  beginDrag(props) {
    props.onJawDrag();
    const { id, left, top } = props;
    return { id, left, top };
  },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Jaw extends Component {
  render() {
    const {
      left,
      top,
      connectDragSource,
      isDragging,
    } = this.props;
    if (isDragging) {
      return null;
    }

    return connectDragSource(
      <div style={{ ...style, left, top }}>
        <img style={{ maxHeight: '55px' }} src={jawSrc} alt="trump-jaw" />
      </div>,
    );
  }
}

Jaw.propTypes = {
  // id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  onJawDrag: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
};

// Export the wrapped component:
export default DragSource('jaw', jawSource, collect)(Jaw);
