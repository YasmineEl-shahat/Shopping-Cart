import React from 'react';
import { NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            

            <a className="navbar-brand" href="#">Navbar</a>
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">Admin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/menu">Menu</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
            </ul>
            <div className="collapse navbar-collapse" id="navbarNav"></div>

            <span className="badge badge-primary">{props.productsCount}</span>
        </nav>
     );
}
 
export default Navbar;