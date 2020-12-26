import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    
    
    getClasses(){
        return this.props.product.count === 0? "badge badge-warning m-2": "badge badge-primary m-2";
    }
    
    render() { 
        
        return (
            <div className="row">
                <div className="col-1">
                    <span>
                        <Link to = {`/productDetails/${this.props.product.id}`}>
                            {this.props.product.name}
                        </Link>  
                    </span>
                </div>
                {this.props.children}
                {/* {this.state.names.length === 0 && <h4>No names</h4>} */}
               
                <div className="col">
                    <span className={this.getClasses()}>{this.props.product.count}</span>
                    {/* <ul>
                        {this.state.names.map(name => (
                           <li key={name}>{name}</li>
                     ))}
                    </ul> */}
                    <button onClick={() =>this.props.onIncrement(this.props.product)} className="btn btn-primary btn-sm">+</button>
                    <span style ={{cursor: "pointer"}}
                    onClick={() => this.props.onDelete(this.props.product)}>
                        <i className="fas fa-trash m-2"></i>
                    </span>
                </div>
            </div>
            
        );
    }
}
 
export default Product;