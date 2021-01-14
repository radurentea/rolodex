import React from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: [],
      searchField: '',
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
        <input type= 'search' placeholder='Search players' onChange={ e => this.setState({ searchField: e.target.value }) }/>
        <CardList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
