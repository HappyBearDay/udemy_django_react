import React, {Component} from 'react';

var FontAwesome = require('react-fontawesome')

class MovieList extends Component {
    
    
    movieClicked = movie =>{
        this.props.movieClicked(movie);
    };

    editClicked = movie => {
        this.props.editClicked(movie);
    }
    removeClicked = movie => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.props.token}`
            }
            }).then( resp => this.props.movieDeleted(movie))
            .catch( error => console.log(error))
    };
    newMovie = () => {
        this.props.newMovie();
};

    render(){
    return ( 
        <React.Fragment>
            {this.props.movies.map( (movie, index) => {
                return (
                        <div key={index} className='movie-item'>
                            <h3 onClick={() => this.movieClicked(movie)}>
                                {movie.title}
                            </h3>
                            <FontAwesome name='edit'  onClick={() => this.editClicked(movie)}/>
                            <FontAwesome name='trash' onClick={() => this.removeClicked(movie)}/>
                        </div>
                )})}
            <button onClick={this.newMovie}>Add new</button>
        </React.Fragment>
        )}
}

export default MovieList;

