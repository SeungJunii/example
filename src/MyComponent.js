import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      It is {name}
      <br />
      children 값은 {children}
      <br />
      My favoriteNumber is {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'this',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
