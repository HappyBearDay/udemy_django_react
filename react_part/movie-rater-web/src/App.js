import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'
import MovieForm from './components/movie-form'

var FontAwesome = require('react-fontawesome')

function compare(a, b) {

  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  let comparison = 0;
  if (titleA > titleB) {
    comparison = 1;
  } else if (titleA < titleB) {
    comparison = -1;
  }
  return comparison;
}


class App extends Component {
  state = {
    movies: [],
    selectedMovie: null,
    editedMovie: null
  }

  componentDidMount(){
    //fetch data
    fetch(`http://127.0.0.1:8000/api/movies/`, {
        method: 'GET',
        'headers': {
            'Authorization': 'Token 057a1ee54639790b27251dc92f86bffecc31cec4'
        }
    }).then( resp => resp.json())
      .then( res => this.setState({movies : res.sort(compare)}) )
      .catch( error=> console.log(error))
  }

  loadMovie = movie => {
    const movies = this.state.movies.filter( curr_movie => curr_movie.id !== movie.id)
    this.setState({selectedMovie: movie, movies: [...movies, movie].sort(compare), editedMovie: null});
  }
  movieDeleted = selMovie => {
    const movies = this.state.movies.filter( movie => movie.id !== selMovie.id);
    this.setState({movies: movies.sort(compare), selectedMovie: null})
  }
  editClicked = selMovie => {

    this.setState({editedMovie: selMovie, selectedMovie: null});
  }
  newMovie = () => {
    this.setState({editedMovie: {title: '', description: ''}});
  }

  cancelForm = () => {
    this.setState({editedMovie: null, selectedMovie: null});
  }
  addMovie = movie => {
    this.setState({movies: [...this.state.movies, movie].sort(compare), selectedMovie: movie, editedMovie: null});
}

  render (){
    return (
      <div className="App">
        <h1>
          <FontAwesome name='film'/>
          <span> Movie Rater</span>
        </h1>
        <div className='layout'>
          <MovieList movies={this.state.movies} movieClicked={this.loadMovie} 
          movieDeleted={this.movieDeleted} editClicked={this.editClicked} newMovie={this.newMovie}/>
          <div>
            { !this.state.editedMovie ? (
              <MovieDetails movie={this.state.selectedMovie} updateMovie={this.loadMovie}/>
            ) : (
              <MovieForm movie={this.state.editedMovie} cancelForm={this.cancelForm} 
              addMovie={this.addMovie} editedMovie={this.loadMovie}/>
            )}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
