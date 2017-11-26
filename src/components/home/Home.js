import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../statics/profile.jpeg';
import './Home.css';

export default () => (
  <div className="Home">
    <div className="Home-header">
      <h1>My Things</h1>
      <img className="Home-ProfilePic" src={ProfilePic} alt="profile guy fox" />
    </div>
    <div className="Home-Categories">
      <Link className="Home-Category Home-Movies" to="/movies">
        <h2>Movies</h2>
        <p>46 items</p>
      </Link>
      <a className="Home-Category Home-Music">
        <h2>Music</h2>
        <p>23 items</p>
      </a>
      <a className="Home-Category Home-Podcasts">
        <h2>Podcasts</h2>
        <p>96 items</p>
      </a>
      <a className="Home-Category Home-Books">
        <h2>Books</h2>
        <p>2 items</p>
      </a>
    </div>
  </div>


);