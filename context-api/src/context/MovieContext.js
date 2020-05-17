import React, { useState, createContext} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Avengers',
            rating: '3.5/5'
        },
        {
            name: 'Fight Club',
            rating: '4.5/5'
        },
        {
            name: 'James Bond',
            rating: '3/5'
        },
        {
            name: 'Star Wars',
            rating: '3.5/5'
        }
    ])
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}


