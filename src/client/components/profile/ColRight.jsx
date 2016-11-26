// @flow

import React, { Component } from 'react';
import { Col } from 'reactstrap';
import CardRight from './CardRight';
import styles from './ColRight.css';

export default class ColRight extends Component {

  render() {
    return (
      <Col md="3" id={styles.col_right}>
        <CardRight />
      </Col>
    );
  }
}
