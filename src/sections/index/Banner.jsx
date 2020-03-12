import React from "react";
// Stylesheets
import "./stylesheets/BannerStyles.scss";
import bannervideo from '../../assets/video.mp4';
import poster from '../../assets/poster.png';

export default class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <video id='videobanner' poster={poster} autoPlay muted loop>
          <source src={bannervideo} type="video/mp4"></source>
        </video>
        <div className="inner">
          <h1>The Shortcut</h1>
          <h3>Accelerating your entrance into the startup world</h3>
          <a href="/#">Our Story</a>
        </div>
      </div>
    );
  }
}
