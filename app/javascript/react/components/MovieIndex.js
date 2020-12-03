import React from "react";
import Tile from "./Tile";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";


const MovieIndex = (props) => {

  //const [getMovieIdList, setMovieIdList] = useState([])
  const [getMovieDetails, setMovieDetails] = useState([]);

  
  useEffect(()=> {
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "a897c00b4cmsh2c90dea9a968474p1d8497jsnd26f52cb9f4d",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
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
        setMovieDetails(body.Search)
      })
      .catch(err => {
        console.error(err);
      }, [])}) 
      
  
    const movieTiles = getMovieDetails.map((movie) => {
      return(<Tile 
      key={movie.imdbID}
      movieTitle={movie.Title}
      //year={movie.year}
      />)
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
  ) } 

  
 
export default MovieIndex