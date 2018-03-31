import React from 'react';
import PropTypes from 'prop-types';
import PitchTesterContainer from './PitchTesterContainer';
import Img from './Img';
import Button from './Button';

const PitchTester = () => (
  <PitchTesterContainer>
    <Img src="/assets/pitchpipe.png" alt="pitchpipe" />
    <Button>Test Me!</Button>
  </PitchTesterContainer>
);

PitchTester.propTypes = {};

export default PitchTester;
