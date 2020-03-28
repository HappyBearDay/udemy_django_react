import React, {Component} from 'react';

class MovieList extends Component {
    render(){
    return ( this.props.movies.map(
        (movie, index) => {return (<h3 key={movie.id}>{movie.title}</h3>)} ))}
}

export default MovieList;

