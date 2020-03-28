import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movie-list'


class App extends Component {

  state = {
    movies: []
  }

      
  componentDidMount(){
    //fetch data
    fetch('http://127.0.0.1:8000/api/movies/', {
        method: 'GET',
        'headers': {
            'Authorization': 'Token  057a1ee54639790b27251dc92f86bffecc31cec4'
        }
    }).then( resp => resp.json())
      .then( res => this.setState({movies : res}) )
      .catch( error=> console.log(error))
  }

  render (){
    const movies = this.state.movies
    return (
      <div className="App">
        <h1>Movie Rater</h1>
        <MovieList movies={movies}/>
      </div>
    );
  }
}

export default App;
