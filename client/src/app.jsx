import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'fakeusername',
      progress: ['really flat', 'right on', 'a little sharp'],
    };
  }

  render() {
    return (
      <div>
        <div>PitchTester will go here</div>
        <div>ResultSubmit will go here</div>
        <div className="progress-bar">
          { this.state.progress.map(str => <div>{str}</div>) }
        </div>
      </div>
    );
  }
}

export default App;
