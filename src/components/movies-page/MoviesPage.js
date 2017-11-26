import React from 'react';
import { Link } from 'react-router-dom'
import './MoviesPage.css';
import X from '../../statics/menu-close-x.png';

import Movies from '../../MovieData';

const netflix = Movies.slice(Movies.length / 2);
const amazon = Movies.slice(0, Movies.length - netflix.length);

export default () => (
  <div className="Movies">
    <div className="Movies-Background"/>
    <div className="Movies-header">
      <h1>
        Movies
      </h1>
      <Link to="/">
        <img src={X} className="Movies-CloseButton" alt="close X button" />
      </Link>
    </div>
    <p className="Movies-ItemsCount">46 items</p>

    <br />
    <p>Netflix - My List</p>
    <div className="Movies-list-container">
      <div className="Movies-list-view">
        {
          netflix.map(movie => (
            <Link to={`/movies/${movie.path}`} >
              <img className="Movies-thumbnail" src={movie.thumbNail} alt={`thumbnail of ${movie.title}`} />
            </Link>
          ))
        }
      </div>
    </div>




    <br />
    <p>Amazon Prime Video - Watchlist</p>
    <div className="Movies-list-container">
      <div className="Movies-list-view">
        {
          amazon.map(movie => (
            <Link to={`/movies/${movie.path}`} >
              <img className="Movies-thumbnail" src={movie.thumbNail} alt={`thumbnail of ${movie.title}`} />
            </Link>
          ))
        }
      </div>
    </div>
  </div>


);