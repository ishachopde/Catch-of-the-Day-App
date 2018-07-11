import React, { Component } from 'react';
import './App.css';
import './styles/styles.css';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';
import sampleFishes from './samplefishes';
import Fish from './components/Fish';

class App extends Component {
    constructor(){
        super();
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);


        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish){
         //update state
        // make a copy of the existing state
        const fishes = {...this.state.fishes};
        // to keep every fish unique we use a timestamp
        const timestamp = Date.now();
        // add new fish
        fishes[`{fish-${timestamp}`] = fish;
        this.setState({ fishes: fishes });

    }

    loadSamples() {
        this.setState ({
            fishes: sampleFishes
        })
    }

    addToOrder(key){
        const order = this.state.order;
        // console.log("order: ", order);
        order[key] = order[key]+1 || 1;
        // console.log(order[key]);
        this.setState({ order: order });
    }


  render() {
        console.log(this.state.order);
    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
                <ul className="list-of-fishes">
                    {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]}
                                                                     addToOrder = {this.addToOrder}/>)}
                </ul>
            </div>

            <Order fishes={this.state.fishes} order={this.state.order}/>
            <Inventory addfish={this.addFish} loadSamples={this.loadSamples}/>

        </div>
    );
  }
}

export default App;
