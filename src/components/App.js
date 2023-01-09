import React from "react";
import "../styles/App.css";
import Movie from "./Movie";
import MoviesList from "./MoviesList";

const App = () => {
  
  return (
    <div id="main">
      <h1>Movie List</h1>
      <MoviesList />
      <Movie />
    </div>
  );
};

export default App;
