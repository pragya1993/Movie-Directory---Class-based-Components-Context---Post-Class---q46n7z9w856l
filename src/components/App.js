import React, {useState}from "react";
import "../styles/App.css";
import Movie from "./Movie";
import MoviesList from "./MoviesList";

const App = () => {

  const [val, setVal] = useState([])
  function call(val){
    setVal(val)
  }
  // console.log(val.length===0)
  
  return (
    <div id="main">
      <h1>Movie List</h1>
      <MoviesList function={call}/>
      {
        val.length===0 ? <div id="movies-banner">Invalid Id</div>: <Movie Movie_director={val.director} Movie_year={val.year}  Movie_title={val.title}/>
      }
    </div>
  );
};

export default App;