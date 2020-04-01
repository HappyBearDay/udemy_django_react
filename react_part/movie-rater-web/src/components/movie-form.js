import React, { Component } from 'react';


class MovieForm extends Component {
    state = {
    }

    render() {
        return (
            <React.Fragment>
                <h1>Form</h1>
                <p>{this.props.editedMovie.title}</p>
            </React.Fragment>
            )
    }
}

export default MovieForm;
