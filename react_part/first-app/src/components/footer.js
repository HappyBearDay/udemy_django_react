import React, { Component } from 'react';


class Footer extends Component{

    state = {
        name : 'bear'
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
        console.log(event.target.value)
        //console.log('changed', event)
        this.setState({ name : event.target.value})
    }

    render () {
        return (
        <div>
            <h2 onClick={this.props.myalert} > {this.props.trademark}</h2>
            <input onChange={this.changed } value={this.state.name} type='text'></input>
        </div>
            )
    }
}

export default Footer;