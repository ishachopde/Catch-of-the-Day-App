import React, {Component} from 'react';

class addFishForm extends Component{
    createFish(event){
        event.preventDefault();
        console.log("Gonna make some Fish! ");
         const fish ={
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        }
        // this.props.addFish(fish);
        // console.log(this.props.addFish(fish));
        this.fishForm.reset();
    }

    render(){
        return(
            <form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={this.createFish.bind(this)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Fish-Name"/>
                <input ref={(input) => this.price = input} type="text" placeholder="Fish-Price"/>
                <select ref={(input) => this.status = input} >
                    <option value="available">Fresh!!</option>
                    <option value="available">Sold!!!</option>
                </select>
                <textarea ref={(input) => this.desc = input} placeholder="Fish-Description"/>
                <input ref={(input) => this.image = input} type="text" placeholder="Fish-image"/>
                <button type="submit">+ Add Item </button>
            </form>
        );
    }
}


export default addFishForm;