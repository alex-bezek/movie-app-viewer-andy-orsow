import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../statics/profile.jpeg';
import './Home.css';

export default class Home extends Component {

  constructor(){
    super();
    this.onClickBadCategory = this.onClickBadCategory.bind(this);
    this.state = { pulseMovies: false }
  }

  onClickBadCategory = (event) => {
    if(this.state.pulseMovies === true){
      return; // Return early since its already set
    }
    this.setState({pulseMovies: true}, () => {
      setTimeout(() => {
        this.setState({pulseMovies: false});
      }, 1500)
    })
  }

  render(){
    return (
      <div className="Home">
        <div className="Home-header">
          <h1>My Things</h1>
          <img className="Home-ProfilePic" src={ProfilePic} alt="profile guy fox" />
        </div>
        <div className="Home-Categories">
          <Link className={`Home-Category Home-Movies ${this.state.pulseMovies ? 'Home-Movies--Pulse' : ''}`} to={`${process.env.PUBLIC_URL}/movies`}>
            <h2>Movies</h2>
            <p>46 items</p>
          </Link>
          <a className="Home-Category Home-Music" onClick={this.onClickBadCategory}>
            <h2>Music</h2>
            <p>23 items</p>
          </a>
          <a className="Home-Category Home-Podcasts" onClick={this.onClickBadCategory}>
            <h2>Podcasts</h2>
            <p>96 items</p>
          </a>
          <a className="Home-Category Home-Books" onClick={this.onClickBadCategory}>
            <h2>Books</h2>
            <p>2 items</p>
          </a>
        </div>
      </div>
    )
  }
};