import React from 'react';
import './App.css';
import MovieList from './components/movie-list'
function App() {
  const movies = ['titanic', 'avatar']
  return (
    <div className="App">
      <h1>Movie Rater</h1>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
