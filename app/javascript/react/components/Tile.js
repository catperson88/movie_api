import React from "react";

const Tile = (props) => {

  // fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=tt2935510&type=get-movie-details", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-key": "a897c00b4cmsh2c90dea9a968474p1d8497jsnd26f52cb9f4d",
  //     "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
  //   }
  // }).then(response => {
  //   if (response.ok) {
  //     return response
  //   } else {
  //     const errorMessage = `${response.status} (${response.statusText})`;
  //     const error = new Error(errorMessage);
  //     throw (error);
  //   }
  // }).then(response => response.json())
  //   .then(body => {
  //     setMovieDetails([body]);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })


  return (<div className="tile">
    {props.movieTitle}
  </div>
  )
}

export default Tile