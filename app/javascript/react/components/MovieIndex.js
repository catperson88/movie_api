import React from "react";
import Tile from "./Tile";
import SearchForm from "./SearchForm";


const MovieIndex = (props) => {


  return(<div className="index-page">
    <div className="search-bar">
      <SearchForm />
    </div>
    <div className="movie-list">
      <Tile />
    </div>

  </div>
  )
}

export default MovieIndex