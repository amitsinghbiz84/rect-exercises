import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductFilter from './components/productfilter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title pt-5">Product Filter</h1>
        </header>
        <ProductFilter/>
      </div>
    );
  }
}

export default App;
