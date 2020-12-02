


fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "a897c00b4cmsh2c90dea9a968474p1d8497jsnd26f52cb9f4d",
    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });