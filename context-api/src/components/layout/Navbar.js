import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'

function Navbar() {
    const [movies,setMovies] = useContext(MovieContext)
    return (
        <div className='navbar'>
            <h1>MoviesDB</h1>
            <ul>
                <li>Movies Count: {movies.length}</li>
                <li>About</li>
            </ul>            
        </div>
    )
}

export default Navbar
