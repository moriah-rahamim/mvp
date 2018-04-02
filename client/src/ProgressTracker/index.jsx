import React from 'react';
import PropTypes from 'prop-types';
import PitchAttempt from './PitchAttempt';
import ProgressTrackerContainer from './ProgressTrackerContainer';
import Label from './Label';

const ProgressTracker = ({ progressArray }) => (
  <ProgressTrackerContainer>
    <Label>Your progress:</Label>
    { progressArray.map(num => (
      <PitchAttempt result={num} />
    )) }
  </ProgressTrackerContainer>
);

ProgressTracker.propTypes = {
  progressArray: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ProgressTracker;
