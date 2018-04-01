import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ResultButton = ({ text, value }) => (
  <Button>{text}</Button>
);

ResultButton.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ResultButton;
