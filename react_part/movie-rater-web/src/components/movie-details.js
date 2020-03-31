import React, { Component } from 'react';

class MovieDetails extends Component {
    
    render() {
        return (
            <React.Fragment>
        {this.props.selectedMovie ? (
        <div>
            <h3>{this.props.selectedMovie.title}</h3>
            <p>{this.props.selectedMovie.description}</p>
        
        </div>
        ) : null }
            </React.Fragment>
            )
        
    }
}

export default MovieDetails;
