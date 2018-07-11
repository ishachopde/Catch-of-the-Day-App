import React, {Component} from 'react';
import {formatPrice} from '../helpers';
class Fish extends Component{


    render() {
        // console.log("thid is state", this.props);
        const {details, index} = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'ADD TO ORDER' : "SOLD OUT";
        return (
            <li className="menu-fish">
                <img src={details.image}/>
                 <h3 className="fish-name">
                     {details.name}
                     <span className="price"> {formatPrice(details.price)}</span>
                 </h3>
                <p>{details.desc}</p>
                <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>

            </li>
        );

    }
}

export default Fish;