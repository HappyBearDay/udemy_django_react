import React, {Component} from 'react';

class MovieList extends Component {
    
    
    componentDidMount(){
        //fetch data
    }
    render(){
    return ( this.props.movies.map(
        (movie, index) => {return (<h3 key={index}>{movie}</h3>)} ))}

}

export default MovieList;

