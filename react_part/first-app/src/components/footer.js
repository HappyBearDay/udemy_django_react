import React, { Component } from 'react';


class Footer extends Component{

    state = {
        name : 'bear',
        isLogin : true
    }

    // We can add 'scenario' before/after some life cycle moment
    // A good practice is to subscribe to BDD/Rest API at 'DidMount'
    // And Unsubscribe at 'WillUnmount'

    componentDidMount(){
        this.setState({name : 'MyName'})
        //Subscribe here
    }

    componentWillUnmount(){
        //Unsubscribe here
    }



    createAlert = () => {alert('FOOTER')}
    changed  =(event) => {
        this.setState({ name : event.target.value})
    }

    render () {
        return (
            <div>
                { this.state.isLogin ? (
                    <React.Fragment>
                        <h2 onClick={this.props.myalert}> {this.props.trademark}</h2>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p>You can't see this content.</p>
                        <p>You must be login.</p>
                    </React.Fragment>
                )}
                <input onChange={this.changed } value={this.state.name} type='text'></input>                
            </div>
            )
    }
}

export default Footer;