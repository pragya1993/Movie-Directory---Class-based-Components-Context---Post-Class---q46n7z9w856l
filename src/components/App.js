import React from "react";
import "../styles/App.css";
import MovieProvider from "./MovieContext";
import Movie from "./Movie";
import MoviesList from "./MoviesList";

const App = () => {
  return (
    <MovieProvider>
      <div id="main">
        <h1>Movie List</h1>
        <MoviesList />
        <Movie />
      </div>
    </MovieProvider>
  );
};

export default App;
