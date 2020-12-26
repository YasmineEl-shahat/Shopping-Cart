import React, { Component } from 'react';

class Admin extends Component {
    
    render() { 
        const {products , onDelete} = this.props;
        return ( 
            <React.Fragment>
                <h1>Admin</h1>
                <button
                 onClick={() => this.props.history.push("/productform/new")}
                 className="btn btn-primary"
                >Add</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <i
                                    onClick={() =>
                                        this.props.history.push(`/productform/${product.id}`)
                                    } className="fas fa-edit"></i>
                                </td>
                                <td>
                                    <i 
                                    onClick={() => onDelete(product)}
                                    className="fas fa-trash"></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
         );
    }
}
 
export default Admin;