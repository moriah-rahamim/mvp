import React from 'react';
import PropTypes from 'prop-types';
import ResultsRecorderContainer from './ResultsRecorderContainer';
import Title from './Title';
import ResultOptions from './ResultOptions';
import ResultButton from './ResultButton';

const ResultsRecorder = () => {
  const resultOptions = [
    ['really flat', -2],
    ['a bit flat', -1],
    ['nailed it!', 0],
    ['a bit sharp', 1],
    ['really sharp', 2],
  ];

  return (
    <ResultsRecorderContainer>
      <Title>How did you do?</Title>
      <ResultOptions>
        {resultOptions.map(option => <ResultButton text={option[0]} value={option[1]} />)}
      </ResultOptions>
    </ResultsRecorderContainer>
  );
};

ResultsRecorder.propTypes = {};

export default ResultsRecorder;
