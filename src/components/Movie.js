import React from "react";

class Movie extends React.Component {
  render() {

    // If no movie is selected, show message - "Invalid Id".
    
    return (
      <div id="movie-banner">
        <h2>Movie title</h2>
        <h2>Movie year</h2>
        <h2>Movie director</h2>
      </div>
    );
  }
}

export default Movie;
