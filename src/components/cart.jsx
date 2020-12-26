import React from 'react';

const Cart= (props) => {
    const style = props.product.isInCart ? {cursor: "pointer"} : {color: "#80808080", cursor: "pointer"}
    return ( <i 
        style={style}
        onClick={() => props.onClick(props.product)}
        className="fas fa-cart-plus"></i> );
}
 
export default Cart;