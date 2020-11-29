import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MovieIndex from "./MovieIndex";  
import MovieShow from "./MovieShow";



const App = () => {
  <BrowserRouter>
  <Switch>
      <Route exact path="/" component={MovieIndex} />
      <Route exact path="/movies" component={MovieIndex} />
      <Route exact path="/movies/:id" component={MovieShow} />
  </Switch>
  </BrowserRouter>
}

export default App





