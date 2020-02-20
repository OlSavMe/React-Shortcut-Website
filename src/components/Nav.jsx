import React from "react";
import "./styles/navStyles.scss";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };
  render() {
    return (
      <nav>
        <div className="logo">
          <img src={require(".././assets/shortcut-logo.png")}></img>
        </div>

        <ul className={this.state.isActive ? "active" : ""}>
          {/*-------------------About--------------------*/}
          <li className="subnav">
            <a className="subnav-btn" href="#">
              About
            </a>
            <ul className="subnav-content">
              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Our story</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Our team</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Talents pool</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Success stories</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Contact</li>
              </div>
            </ul>
          </li>

          {/*-------------------Activities-----------------*/}
          <li className="subnav">
            <a className="subnav-btn" href="#">
              Activities
            </a>

            <ul className="subnav-content">
              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>What's on?</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>See all</li>
              </div>
            </ul>
          </li>

          {/*-------------------Resources-----------------*/}
          <li className="subnav">
            <a className="subnav-btn" href="#">
              Resources
            </a>
            <ul className="subnav-content">
              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Blog</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Gallery</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>Yearbook</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>White paper</li>
              </div>

              <div>
                <div className="icon-container">
                  <img src={require(".././assets/twitter.png")}></img>
                </div>
                <li>For media</li>
              </div>
            </ul>
          </li>
          {/*-------------------For-partners-----------------*/}
        </ul>

        <div className="toggle" onClick={this.toggleMenu}>
          <a> X</a>
        </div>
      </nav>
    );
  }
}
