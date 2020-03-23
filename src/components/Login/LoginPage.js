import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../store/actions/auth";

import './LoginPage.css'



class LoginPage extends Component {
    state ={
        email: '',
        password: ''
    }
    handleChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { email, password } = this.state;

        dispatch(loginUser(email, password));
    }


    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to = {'/profile'}/>
        } else {
        return(
            <div className="container">
                <div className="login__container">
                <form onSubmit = {this.handleSubmit} className = "col s7">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <i class="material-icons prefix">email</i>
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                            id="email" 
                            name="email"
                            onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <i class="material-icons prefix">lock</i>
                        <label htmlFor="password">Password</label>
                        <input type="text" 
                            id="password" 
                            name="password"
                            onChange = {this.handleChange}/>
                    </div>
                    {this.props.loginError && <div className="pink-text text-darken-3">The email or password you entered is incorrect</div>}
                    <div className="input-field button__container">
                        <button className="btn pink lighten-1 z-depth-0"
                    >Login</button>
                    </div>
                    
                </form>
                </div>
            </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
      isLoggingIn: state.auth.isLoggingIn,
      loginError: state.auth.loginError,
      isAuthenticated: state.auth.isAuthenticated
    };
  }
  export default connect(mapStateToProps)(LoginPage);