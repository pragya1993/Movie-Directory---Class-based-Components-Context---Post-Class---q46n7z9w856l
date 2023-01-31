import React from "react";
import { MovieContext } from "./MovieContext";

class Movie extends React.Component {
  static contextType = MovieContext;

  render() {
    const { movies, selectedMovieId } = this.context;
    const movie = movies.find((movie) => movie.id === selectedMovieId);

    return (
      <div id="movie-banner">
        {movie ? (
          <>
            <h2>{movie.title}</h2>
            <h2>{movie.year}</h2>
            <h2>{movie.director}</h2>
          </>
        ) : (
          <h1>Invalid Id</h1>
        )}
      </div>
    );
  }
}

export default Movie;