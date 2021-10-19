import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MyComponent extends Component {
  static defaultProps = {
    name: 'this',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        It is {name}
        <br />
        children 값은 {children}
        <br />
        My favoriteNumber is {favoriteNumber}
      </div>
    );
  }
}

export default MyComponent;
