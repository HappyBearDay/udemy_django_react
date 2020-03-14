import React, { Component } from 'react';


class Footer extends Component{

    createAlert(){alert('HEEAAADERRR')}
    changed(){console.log('aaa')}

    render () {
        return (
        <div>
            <h2 onClick={this.props.myalert} > {this.props.trademark}</h2>
            <input onChange={this.changed}></input>
        </div>
            )
    }
}

export default Footer;