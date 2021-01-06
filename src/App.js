import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({players: users}))
  }

  render() {
    return (
      <div className="App">
        <CardList>
        {
          this.state.players.map(x => <h1 key={x.id}>{x.name}</h1>)
        }
        </CardList>
      </div>
    );
  }
}

export default App;
