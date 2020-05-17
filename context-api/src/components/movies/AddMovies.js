import React,{ useState, useContext } from 'react'
import {MovieContext} from '../../context/MovieContext'

function AddMovies() {
    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateRating = (e) => {
        setRating(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies((prevMovies) => [...prevMovies, { name, rating: `${rating}/5`}])
    }

    return (
        <div className='container'>
            <form onSubmit={addMovie}>
                Name: 
                <input type="text" name="name" value={name} onChange={updateName}/>
                Rating:
                <input type="text" name="rating" value={rating} onChange={updateRating}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddMovies
