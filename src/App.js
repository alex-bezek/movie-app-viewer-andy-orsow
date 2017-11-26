import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MoviesPage from './components/movies-page/MoviesPage';
import Movie from './components/movie/Movie';
import Home from './components/home/Home';
import Movies from './MovieData';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-Screen">
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route exact path={`${process.env.PUBLIC_URL}/movies`} component={MoviesPage} />
            { Movies.map(movie => (
              <Route
                key={movie.path}
                exact path={`${process.env.PUBLIC_URL}/movies/${movie.path}`}
                render={(props) =>
                  <Movie
                    thumbNail={movie.thumbNail}
                    background={movie.background}
                    title={movie.title}
                    year={movie.year}
                    abstract={movie.abstract}
                  />
                }
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
