import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Conversor from './componente/Conversor';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Conversor moedaA="usd" moedaB="br"></Conversor>
        <h1>gsg</h1>
      </div>

    );
  }
}

export default App;