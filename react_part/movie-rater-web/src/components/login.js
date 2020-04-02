import React, {Component} from 'react';


class Login extends Component {

    state = {
        credentials: {
            username : '',
            password: ''
        }
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
                window.location.href = '/movies';
            })
            .catch( error => console.log(error))

    }


    render (){
        return (
            <div className='login-container'>
                <h1>Login Page</h1>
                <p>username : <input name='username' type='text' value={this.state.credentials.username}
                onChange={this.inputChanged}/></p>
                <p>password : <input name='password' type='password' value={this.state.credentials.password}
                onChange={this.inputChanged}/></p>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;