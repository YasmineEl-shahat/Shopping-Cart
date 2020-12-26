import React, { Component } from 'react';
class productDetails extends Component {
   
    handleSave = () =>{
        this.props.history.push('/cart');
    }
    render() { 
         
            const product = this.props.products.filter (p => 
                p.id === parseInt(this.props.match.params.id) )[0];
            return ( 
                <React.Fragment>
                    <h1>Details No.{this.props.match.params.id}</h1>
                    <h2>{product.name}</h2>
                    <h2>Count in Shopping Cart: {product.count}</h2>
                    <button onClick={this.handleSave} className="btn btn-primary btn-sm">Save</button>
                </React.Fragment>
                 );
             }
}
 
export default productDetails;

