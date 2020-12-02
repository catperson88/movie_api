import React from "react";
import Tile from "./Tile";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";


const MovieIndex = (props) => {

  //const [getMovieIdList, setMovieIdList] = useState([])
  const [getMovieDetails, setMovieDetails] = useState([]);

  useEffect(()=> {
    fetch("https://movies-tvshows-data-imdb.p.rapidapi.com/?imdb=tt2935510&type=get-movie-details", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a897c00b4cmsh2c90dea9a968474p1d8497jsnd26f52cb9f4d",
        "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com"
      }
    }).then(response => {
      if (response.ok) {
        return response
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw (error);
      }
    }).then(response => response.json())
      .then(body => {
        debugger
        setMovieDetails([body]);
      })
      .catch(err => {
        console.error(err);
      })}, [])
      


    const movieTiles = getMovieDetails.map((movie) => {
      return(<Tile 
      movieTitle={movie.title}
      details={movie} />)
    })
  
  return(<div className="index-page">
    <div className="totally-superflous">
      <p>Hi, I'm filler text</p>

    </div>
    <div className="search-bar">
      <SearchForm />
    </div>
    <div className="movie-list">
      {movieTiles}
    </div>

  </div>
  )
} 
export default MovieIndex