import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Dupreeh',
          id: 1
        },
        {
          name: 'Device',
          id: 2
        },
        {
          name: 'Xy9nx',
          id: 3
        },
        {
          name: 'Magisk',
          id: 4
        },
        {
          name: 'gla1ve',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.players.map(x => <h1 key={x.id}>{x.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
