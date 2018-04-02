import React from 'react';
import ProgressTracker from './ProgressTracker';
import PitchTester from './PitchTester';
import ResultsRecorder from './ResultsRecorder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: [-2, 2, 2, 0, -1, -2],
    };
  }

  addAttempt(score) {
    const newProgressArr = this.state.progress.slice();
    newProgressArr.push(score);
    this.setState({ progress: newProgressArr });
  }

  render() {
    return (
      <div>
        <ProgressTracker progressArray={this.state.progress} />
        <PitchTester />
        <ResultsRecorder addAttempt={score => this.addAttempt(score)} />
      </div>
    );
  }
}

export default App;
