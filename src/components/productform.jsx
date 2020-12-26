import Axios from 'axios';
import React, { Component } from 'react';

class ProductForm extends Component {
    state = {name: "",
             price:"",
             id: ""};

    async componentDidMount(){
        const id = this.props.match.params.id;
        if(id !== "new"){
            const {data} = await Axios("http://localhost:3000/products/"+ id);
            // clone
            const state = {...this.state};
            //edit 
            state.name  = data.name;
            state.price = data.price;
            state.id = data.id;
            //set state
            this.setState(state);
        }
    }
    handleSubmit = async e =>{
        e.preventDefault();
        //add
        if(this.props.match.params.id === "new"){
            const obj = {...this.state, count: 0, isInCart: false};
            //call backend
            await Axios.post('http://localhost:3000/products/', obj);
        }
        else{
            //edit
            const obj = {... this.state, count: 0, isInCart: false};
            //delete id
            delete obj.id;
            //call backend
            await Axios.put('http://localhost:3000/products/'+ this.state.id , obj);

        }
        
        this.props.history.replace("/admin");
    };
    handleChange = e =>{
        //clone
        let state = {...this.state};
        //edit 
        state[e.currentTarget.name] = e.currentTarget.value;
        //set state
        this.setState(state);
    };
    render() { 
        return ( 
        <React.Fragment>
            <h1>Add Product</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.name}
                     id="name" name="name" type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input 
                     className="form-control"
                     onChange={this.handleChange}
                     value={this.state.price}
                     id="price" name="price" type="text"
                    />
                </div>
                <button className="btn btn-primary" type="submit"> Add</button>
            </form>
        </React.Fragment> );
    }
}
 
export default ProductForm;