import React, { Component } from 'react';
import './App.css';
import './styles/styles.css';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';

class App extends Component {
  render() {
    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
            </div>
            <Order/>
            <Inventory/>

        </div>
    );
  }
}

export default App;
