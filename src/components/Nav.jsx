import React from "react";
import "./stylesheets/NavStyles.scss";
import { Link } from "react-router-dom";

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
          <Link to="/home">
            <img src={require(".././assets/shortcut-logo.png")} alt={""}></img>
          </Link>
        </div>
        <section className={this.state.isActive ? "active" : ""}>
          <ul>
            {/*-------------------About--------------------*/}
            <li className="subnav">
              <a className="subnav-btn" href="/#">
                About
              </a>
              <ul className="subnav-content">
                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={" "}
                    ></img>
                  </div>
                  <li>
                    <Link to="/ourstory" className="nav-link">
                      Our story
                    </Link>
                  </li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>
                    <Link to="/ourteam" className="nav-link">
                      Our team
                    </Link>
                  </li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>
                    <Link to="/faq" className="nav-link">
                      FAQ
                    </Link>
                  </li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>Success stories</li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </div>
              </ul>
            </li>

            {/*-------------------Activities-----------------*/}
            <li className="subnav">
              <a className="subnav-btn" href="/#">
                Activities
              </a>

              <ul className="subnav-content">
                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>What's on?</li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>See all</li>
                </div>
              </ul>
            </li>

            {/*-------------------Resources-----------------*/}
            <li className="subnav">
              <a className="subnav-btn" href="/#">
                Resources
              </a>
              <ul className="subnav-content">
                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>Blog</li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>Gallery</li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>Yearbook</li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>White paper</li>
                </div>

                <div>
                  <div className="icon-container">
                    <img
                      src={require(".././assets/twitter.png")}
                      alt={""}
                    ></img>
                  </div>
                  <li>For media</li>
                </div>
              </ul>
            </li>
            {/*-------------------For-partners-----------------*/}
          </ul>
        </section>

        <div className="toggle" onClick={this.toggleMenu}>
          <a href="/#">X</a>
        </div>
      </nav>
    );
  }
}
