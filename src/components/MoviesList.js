import React from "react";
import { MovieContext } from "./MovieContext";

class MoviesList extends React.Component {
  static contextType = MovieContext;

  render() {
    const {movies, setState} =  this.context;

    const handleOnClick = (id) => {
      setState((state) => ({...state, selectedMovieId: id }));
    }

    return (
      <div id="movies-table">
        <style>{
        `
        td { padding : 20px; }
        tr:hover { background: #3374C2}
        `}</style>
        <table>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr id={`table-row-${movie.id}`} key={movie.id} onClick={() => handleOnClick(movie.id)}>
                <td>{movie.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesList;