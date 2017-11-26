import React from 'react';
import { Link } from 'react-router-dom'
import X from '../../statics/menu-close-x.png';
import './Movie.css';

export default ({ thumbNail, background, title, year, abstract}) => (
  <div className="Movie">
    <Link to="/movies"  className="Movie-CloseButton-container" >
      <img src={X} className="Movie-CloseButton" alt="close X button" />
    </Link>
    <div className="Movie-BackgroundImage-Container">
      <img className="Movie-BackgroundImage" src={background} alt={`background of ${title}`} />
    </div>
    <div className="Movie-Thumbnail-Container">
      <img src={thumbNail} className="Movie-Thumbnail-Image" alt={`thumbnail of ${title}`} />
    </div>

    <div className="Movie-About-container">
      <h5 className="Movie-title">{title}</h5>
      <p className="Movie-year">{year}</p>
      <button className="Movie-button"> Play Movie </button>
      <p className="Movie-abstract"> { abstract }</p>
    </div>
  </div>


);