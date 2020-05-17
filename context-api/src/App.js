import React from 'react';
import Navbar from './components/layout/Navbar'
import MoviesList from './components/movies/MoviesList'
import AddMovies from './components/movies/AddMovies'
import './App.css';

import { MovieProvider } from './context/MovieContext'

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Navbar />
        <AddMovies />
        <MoviesList />
      </MovieProvider>
    </div>
  );
}

export default App;
