
import Joi from 'joi-browser';
import React, { Component } from 'react';

class Login extends Component {
    state = { 
        username: "",
        password:"",
        errors: {}
     };
  
    schema ={
        username: Joi.string().required(),
        password: Joi.string().required()
    }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        if(errors) return;
        //call Backend
        console.log("submit");
    };
    validate = () =>{
        const errors  = {};
        //clone state
        const state = {...this.state};
        delete state.errors;
        const err= Joi.validate(state, this.schema, {abortEarly: false});
        if (err.error === null) {
            this.setState({errors: {}})
            return null;
        }
        for(const error of err.error.details){
            errors[error.path] = error.message;
        }
        //set state
        this.setState({errors});
    }
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
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                         name="username"
                         value={this.state.username}
                         onChange={this.handleChange}
                         type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                         {this.state.errors.username && <div className="alert alert-danger">{this.state.errors.username}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        type="password" className="form-control" id="password" />
                        {this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div>}                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;