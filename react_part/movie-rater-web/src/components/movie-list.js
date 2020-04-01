import React, {Component} from 'react';

class MovieList extends Component {
    movieClicked = (movie) => {this.props.movieClicked(movie)}

    render(){
    return ( 
        <React.Fragment>
            {this.props.movies.map( (movie, index) => { return (<h3 key={movie.id} onClick={() =>this.movieClicked(movie)}>{movie.title}</h3>)})} 
        </React.Fragment>
        )}
}

export default MovieList;

