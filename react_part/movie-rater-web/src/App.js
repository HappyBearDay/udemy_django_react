import React, {Component} from 'react';
import './App.css';
import MovieList from './components/movie-list'
import MovieDetails from './components/movie-details'
import MovieForm from './components/movie-form'


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
            'Authorization': 'Token  057a1ee54639790b27251dc92f86bffecc31cec4'
        }
    }).then( resp => resp.json())
      .then( res => this.setState({movies : res}) )
      .catch( error=> console.log(error))
  }

  loadMovie = (movie) => {
    this.setState({selectedMovie: movie, editedMovie : null})
  }

  movieDeleted = (selMovie) => {
    const movies = this.state.movies.filter( movie => movie.id !== selMovie.id);
    this.setState({movies: movies, selectedMovie: null})
  }

  editClicked = (selMovie) => {
    this.setState({editedMovie : selMovie, selectedMovie: null })
  }

  newMovie = () =>{
    this.setState({editedMovie : {title : '', description : ''} })
  }

  render (){
    return (
      <div className="App">
        <h1>Movie Rater</h1>
        <div className='layout'>
          <MovieList movies={this.state.movies} movieClicked={this.loadMovie} 
                    movieDeleted={this.movieDeleted} editClicked={this.editClicked}
                    newMovie={this.newMovie}/>
          <div>
            { !this.state.editedMovie ? (
              <MovieDetails selectedMovie={this.state.selectedMovie} updateMovie={this.loadMovie}/>
            ) : (
              <MovieForm editedMovie={this.state.editedMovie}/>
            )}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
