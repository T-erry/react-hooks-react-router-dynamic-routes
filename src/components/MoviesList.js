import React from 'react'
import { Link } from 'react-router-dom'

function MoviesList({movies}) {
    const renderMovies = Object.keys(movies).map((movieID)=>{
        console.log(movieID);
       return <li key={movieID}>
        <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
    })
  return (
    <div>
        <ul></ul>
        {renderMovies}</div>
  )
}

export default MoviesList