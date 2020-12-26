//import { faTheRedYeti } from '@fortawesome/free-brands-svg-icons';
import React, { Component } from 'react';

import Product from './product';
class ShoppingCart extends Component {
    
    render() { 
        const {onReset, onDelete, onIncrement,  products} = this.props;
        return ( 
            <React.Fragment>
                <h1>Shopping Cart</h1>
                 {/* reset button that reset count of all products */}
                <button onClick={onReset} className="btn btn-secondary btn-sm m-2">Reset</button>
                {products.map(product =>(
                    <Product key={product.id} 
                     onDelete={onDelete}
                     onIncrement={onIncrement}
                     product={product} />
                ))}
                
            </React.Fragment>
         );
    }
}
 
export default ShoppingCart;