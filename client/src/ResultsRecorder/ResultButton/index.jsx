import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ResultButton = ({ text, value, addAttempt }) => (
  <Button onClick={() => addAttempt(value)}>{text}</Button>
);

ResultButton.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  addAttempt: PropTypes.func.isRequired,
};

export default ResultButton;
