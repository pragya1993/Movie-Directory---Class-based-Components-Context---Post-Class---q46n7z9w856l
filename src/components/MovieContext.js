import React from "react";

export const MovieContext = React.createContext();

class MovieProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 1,
          title: "The Shawshank Redemption",
          year: 1994,
          director: "Frank Darabont",
        },
        {
          id: 2,
          title: "The Godfather",
          year: 1972,
          director: "Francis Ford Coppola",
        },
        {
          id: 3,
          title: "The Godfather: Part II",
          year: 1974,
          director: "Francis Ford Coppola",
        },
        {
          id: 4,
          title: "The Dark Knight",
          year: 2008,
          director: "Christopher Nolan",
        },
        {
          id: 5,
          title: "12 Angry",
          year: 1957,
          director: "Sidney Lumet",
        },
      ],
      selectedMovieId: -1,
      changeSelectedMovieId: () => {},
    };
  }

  render() {
    console.log(this.state.selectedMovieId);
    return (
      <MovieContext.Provider
        value={{
          movies: this.state.movies,
          selectedMovieId: this.state.selectedMovieId,
          setState: this.setState.bind(this),
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    );
  }
}

export default MovieProvider;