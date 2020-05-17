import React from 'react'
import cardImg from '../../assets/images/img_avatar.png'

function MovieCard({ movie }) {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={cardImg} />
            </div>
            <div className="card-content">
                <strong>{movie.name}</strong>
                <p>Rating: {movie.rating}</p>
            </div>
        </div>
    )
}

export default MovieCard
