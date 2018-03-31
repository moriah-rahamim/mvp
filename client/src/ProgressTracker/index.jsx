import React from 'react';
import PropTypes from 'prop-types';
import PitchAttempt from './PitchAttempt';
import ProgressTrackerContainer from './ProgressTrackerContainer';
import Label from './Label';

const ProgressTracker = ({ progressArray }) => (
  <ProgressTrackerContainer>
    <Label>Your progress:</Label>
    { progressArray.slice(-5).map(string => <PitchAttempt result={string} />) }
  </ProgressTrackerContainer>
);

ProgressTracker.propTypes = {
  progressArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProgressTracker;
