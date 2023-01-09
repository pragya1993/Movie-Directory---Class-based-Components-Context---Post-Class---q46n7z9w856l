import React from "react";
import moviesList from "./MovieContext";

class MoviesList extends React.Component {

  render() {
    
    // Get movies list using MoviesContext.

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
             
              {moviesList.map((val)=>{
                return(
                  <tr id="table-row" key={val.id}>
                <td onClick={()=>this.props.function(val)} >{val.title}</td>
                </tr>
                )
              })}
              
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesList;