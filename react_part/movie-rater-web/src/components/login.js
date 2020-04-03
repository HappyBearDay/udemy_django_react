import React, {Component} from 'react';
import {withCookies} from 'react-cookie'


class Login extends Component {

    state = {
        credentials: {
            username : '',
            password: ''
        },
        isLoginView: true,
        message : null
    }
    
    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }
    
    login = () => {
        console.log(this.state.credentials)
        console.log('login')
        fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
            }).then( resp => resp.json())
            .then( res => {
                console.log(res.token);
                this.props.cookies.set('mr-token', res.token);
                window.location.href = '/movies';
            })
            .catch( error => {
                console.log(error);
                this.setState({message: error});})
    }

    register = () =>{
        fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
            }).then( resp => resp.json())
            .then( res => {
                this.setState({isLoginView: true, message: 'You are registred'});
            })
            .catch( error => {
                console.log(error);
                this.setState({message: error});})
    }

    toggleView = () => {
        this.setState({isLoginView: !this.state.isLoginView});
    }

    render (){
        return (
            <div className='login-container'>
                <h1> 
                    {this.state.isLoginView? 'Login Page' : 'Register Page'}
                </h1>

                <p>username : 
                    <input name='username' type='text' value={this.state.credentials.username} onChange={this.inputChanged}/>
                </p>
                <p>password : 
                    <input name='password' type='password' value={this.state.credentials.password} onChange={this.inputChanged}/>
                </p>
                {this.state.message? (<p>{this.state.message}</p>) : '' }

                    {this.state.isLoginView? 
                        <button onClick={this.login}>Login</button>: 
                        <button onClick={this.register}>Register</button>
                    }
                <p onClick={this.toggleView}>
                    {this.state.isLoginView? 'Create Account' : 'Already have an account?'}
                </p>
            </div>
        )
    }
}

export default withCookies(Login);