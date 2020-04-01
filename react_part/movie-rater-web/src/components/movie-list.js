import React, {Component} from 'react';

var FontAwesome = require('react-fontawesome')

class MovieList extends Component {
    movieClicked = (movie) => {this.props.movieClicked(movie)}
    
    removeClicked = (movie) => {

        fetch(`http://127.0.0.1:8000/api/movies/${movie.id}/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type' : 'application/json',
                'Authorization': 'Token  057a1ee54639790b27251dc92f86bffecc31cec4'
            }
        }).then( resp => this.props.movieDeleted(movie))
        .catch( error=> console.log(error))
    }

    render(){
    return ( 
        <React.Fragment>
            {this.props.movies.map( (movie, index) => {
                return (
                        <div key={movie.id}>
                            <h3 onClick={() => this.movieClicked(movie)}>
                                {movie.title}
                            </h3>
                            <FontAwesome name='edit'/>
                            <FontAwesome name='trash' onClick={() => this.removeClicked(movie)}/>
                        </div>
                )})} 
        </React.Fragment>
        )}
}

export default MovieList;

