import React from "react";
import { movies } from "../data";

function Movies() {

  const movieItem = movies.map((movie) => {
    return (
      <div key={movie.title}>
        <h1>{movie.title}</h1>
        <p>Time : {movie.time} mins</p>
        <p>Genre:
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </p>
      </div>
    )

  })

  return (
    <div>
    {/*{code here}*/}
    <h1>Movies Page</h1>
    {movieItem}
  </div>
  )
}

export default Movies;
