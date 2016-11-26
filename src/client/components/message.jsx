// @flow

import React, { Component, PropTypes } from 'react';

export default class Message extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }
}
