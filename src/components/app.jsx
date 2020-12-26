import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
//import ShoppingCart from './shoppingCart';

import Home from './home';
import Menu from './menu'
import ShoppingCart from './shoppingCart';
import ProductDetails from './productDetails';
import Login from './login';
import ProductFrom from './productform';
import Admin from './admin';
// import { toast } from 'react-toastify/dist/react-toastify.cjs.development';
class App extends Component {
    state = { 
        products: []
     }
     handleIncrement = (product) =>{
       //clone
       const products = [...this.state.products];
       const index = products.indexOf(product);
       //deep clone the object to be incremented
       products[index] = {...products[index]};
       //edit
       products[index].count++;
       //set state
       this.setState({products});
    };
     handleDelete = async (product) =>{
        const oldProduct = [...this.state.products]
         //edit
        const products = this.state.products.filter(p => p.id !== product.id);
        //setState
        this.setState({products})
        try{
            // call back end
           await Axios.delete('http://localhost:3000/products/111'+ product.id);
        }catch(ex){
            toast.error("can't delete");
            this.setState({products: oldProduct});
        }
     };
     handleReset = () =>{
         //clone
         let products = [...this.state.products]
         //edit
         products = products.map(p =>{
             p.count = 0;
             return p;
         });
         //setState
        this.setState(products)
     }
     handleInCartChange = product => {
        //clone
        const products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        //edit
        products[index].isInCart = ! products[index].isInCart;
        //set state
        this.setState({products});
     };
     handleEdit =() =>{

     }
    async componentDidMount(){
        //  const promise = fetch('https://jsonplaceholder.typicode.com/posts');
        //  const res = promise.then(res => res.json());
        //  res.then(data => console.log(data));
        //call backend server
        const {data} = await Axios.get('http://localhost:3000/products/');
        //set state
        this.setState({products: data})
     }
    render() { 
        return ( 
           <React.Fragment>
               <ToastContainer />
               <Navbar productsCount={this.state.products.filter(p => p.count >0).length}/>
               <main className="container">
                    <Switch>
                        <Route path="/productDetails/:id/:name?" render ={(props) => (<ProductDetails products={this.state.products} {...props} />
                        )} 
                        />
                        <Route path="/productform/:id" component={ProductFrom} />
                        <Route path="/admin" 
                         render={props =>(
                             <Admin 
                             {...props}
                             products={this.state.products}
                             onDelete={this.handleDelete}
                             onEdit={this.handleEdit}
                             />
                         )}
                        />
                        <Route path="/login" component={Login} />
                        <Route path="/cart" render = { props=> (
                            <ShoppingCart products={this.state.products.filter(p => p.isInCart)}
                            onReset={this.handleReset}
                            onDelete={this.handleInCartChange}
                            onIncrement={this.handleIncrement} 
                            {...props}
                            />)} />
                        <Route path="/menu" render={props =>(
                            <Menu {...props}
                            products={this.state.products}
                            onClick={this.handleInCartChange}
                            />
                        )}
                        />
                        <Route path="/home" exact component={Home} />
                        <Redirect from="/" to ="/home" />  
                        <Redirect to ="/notFound" />
                       
                    </Switch> 
               </main>
               
           </React.Fragment>
         );
    }
}
 
export default App;