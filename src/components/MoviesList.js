import React from "react";

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
              <tr id="table-row">
                <td>Movie Title</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesList;
