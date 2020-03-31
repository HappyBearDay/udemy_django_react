import React, {Component} from 'react';

class MovieList extends Component {
    render(){
    return ( 
        <React.Fragment>
        {this.props.movies.map( (movie, index) => { return (<h3 key={movie.id}>{movie.title}</h3>)})} 
        </React.Fragment>
        )}
}

export default MovieList;

