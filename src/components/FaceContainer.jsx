/* eslint-disable function-paren-newline */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import Jaw from './Jaw';
import Face from './Face';

const styles = {
  // width: '100%',
  height: 400,
  position: 'relative',
};

/**
 * Implements the drop target contract
 */
const jawTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveJaw(item.id, left, top);
  },
};

class FaceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jaw: { top: 245, left: 245 },
    };
  }

  moveJaw(id, left, top) {
    this.setState({
      jaw: { top, left },
    });
  }

  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div style={styles}>
        <Face />
        <Jaw
          left={this.state.jaw.left}
          top={this.state.jaw.top}
          onJawDrag={this.props.onJawDrag}
        />
      </div>,
    );
  }
}
FaceContainer.propTypes = {
  onJawDrag: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};


export default DropTarget('jaw', jawTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(FaceContainer);
