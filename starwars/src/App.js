import React from 'react';
import './App.css';
import People from './components/people'
import {Card} from 'semantic-ui-react'

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Card.Group centered={true}>
        <People />
      </Card.Group>
    </div>
  );
}

export default App;
