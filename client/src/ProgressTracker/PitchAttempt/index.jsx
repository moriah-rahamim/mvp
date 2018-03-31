import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PitchAttempt = ({ result, className }) => (
  <div className={className}>{result}</div>
);

PitchAttempt.propTypes = {
  result: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const PitchAttemptStyled = styled(PitchAttempt)`
  margin: 0 5px;
`;

export default PitchAttemptStyled;
