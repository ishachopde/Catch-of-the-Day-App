import React, { Component } from 'react';
// import Navigation from 'react-router-dom';
import {getFunName} from '../helpers';
import '../App.css';
import '../styles/styles.css';
// import PropTypes from 'prop-types';

class StorePicker extends Component {

    goToStore(event){
        if(event) event.preventDefault();
        console.log("You have changed the URL");
        const storeId = this.storeInput.value;
        this.props.history.push(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store &nbsp; -></button>

            </form>
        );
    }
}

export default StorePicker;
