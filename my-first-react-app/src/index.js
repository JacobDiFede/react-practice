import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import { UserMovieList } from './components/UserMovieList';
import Nav from './components/Nav';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path='/react-practice' component={MovieList} />
        <Route exact path='/react-practice/usermovielist' component={UserMovieList} />
        <Route path='**' render={() => <Redirect to='/react-practice'/> }/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
