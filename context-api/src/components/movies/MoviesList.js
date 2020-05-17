import React, { useState, useContext } from 'react'
import MovieCard from './MovieCard'
import { MovieContext } from '../../context/MovieContext'

function MoviesList() {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className='container card-list'>
         {
            movies.map((movie,i) => 
                <MovieCard key={i} movie={movie}/>)
         }   
        </div>
    )
}

export default MoviesList
