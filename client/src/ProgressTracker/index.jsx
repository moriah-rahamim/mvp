import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressTracker = ({ progressArray, className }) => (
  <div className={className}>
    Progress array!{ progressArray.map(string => <div>{string}</div>) }
  </div>
);

ProgressTracker.propTypes = {
  progressArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired,
};

const ProgressTrackerStyled = styled(ProgressTracker)`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export default ProgressTrackerStyled;
