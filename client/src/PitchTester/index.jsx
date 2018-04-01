import React from 'react';
import PropTypes from 'prop-types';
import PitchTesterContainer from './PitchTesterContainer';
import Img from './Img';
import Button from './Button';

const PitchTester = () => {
  const audio = new Audio('/assets/piano-c4.wav');

  return (
    <PitchTesterContainer>
      <Img src="/assets/pitchpipe.png" alt="pitchpipe" />
      <Button onClick={() => audio.play()}>Test Me!</Button>
    </PitchTesterContainer>
  );
};

PitchTester.propTypes = {};

export default PitchTester;
