import React, { Component } from "react";
import "./Nav.scss";

import { Link } from "react-router-dom";

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navActive: false,
      subnavActive: false,
    };
  }

  toggleNav = () => {
    this.setState((prevState) => ({ navActive: !prevState.navActive }));
  };

  toggleSubnav = () => {
    this.setState((prevState) => ({ subnavActive: !prevState.subnavActive }));
  };

  render() {
    return (
      <div className="navigation">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-desktop">
              <Link to="/">
                <img
                  src={require("../../assets/icons/shortcut-logo.png")}
                  alt="shortcut-logo"
                />
              </Link>
            </div>
            <div className="logo-mobile">
              <Link to="/home">
                <img
                  src={require("../../assets/icons/shortcut-logo-mobile.png")}
                  alt="shortcut-logo"
                />
              </Link>
            </div>
          </div>
          <nav>
            <ul className={this.state.navActive ? "menu active" : "menu"}>
              <li className="menu-item">
                <p href="/#" className="btn" onClick={this.toggleSubnav}>
                  About
                </p>
                <ul
                  className={
                    this.state.subnavActive ? "submenu active" : "submenu"
                  }
                >
                  <Link to="/story" className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/about.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">About us</a>
                  </Link>
                  <Link to="/success" className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/success.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/success">Success stories</a>
                  </Link>
                  <Link to="/team" className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/team.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Our team</a>
                  </Link>
                  <Link to="/code" className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/code.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Code of conduct</a>
                  </Link>

                  <Link to="/faq" className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/faq.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">FAQ</a>
                  </Link>
                  <Link to="/contact" className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/contact.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Contact</a>
                  </Link>
                </ul>
              </li>
              <li className="menu-item" id="events">
                <a className="btn" href="/events">
                  Events
                </a>
              </li>

              <li className="menu-item" id="resources">
                <p
                  className="btn"
                  href="#resources"
                  onClick={this.toggleSubnav}
                >
                  Resources
                </p>
                <ul
                  className={
                    this.state.subnavActive ? "submenu active" : "submenu"
                  }
                >
                  <li className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/blog.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Blog</a>
                  </li>
                  <li className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/gallery.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Gallery</a>
                  </li>

                  <li className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/whitepaper.png")}
                        alt="icon"
                      />
                    </div>
                    <a
                      href="https://theshortcut.org/wp-content/uploads/2019/11/white-paper-diversity-and-inclusion-in-tech.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      White paper
                    </a>
                  </li>
                  <li className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav/for-media.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/media">For media</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item" id="partners">
                <p className="btn" href="#partners" onClick={this.toggleSubnav}>
                  For partners
                </p>
                <ul
                  className={
                    this.state.subnavActive ? "submenu active" : "submenu"
                  }
                >
                  <li className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Page 1</a>
                  </li>
                  <li className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Page 2</a>
                  </li>
                  <li className="submenu-item">
                    <div>
                      <img
                        src={require("../../assets/icons/nav-icon.png")}
                        alt="icon"
                      />
                    </div>
                    <a href="/#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item" id="join">
                <a className="btn" href="#join">
                  Join
                </a>
              </li>
            </ul>
          </nav>

          <div className="search">
            <input type="text" placeholder="Search" />
            <input type="Submit" value="" />
          </div>

          <div
            onClick={this.toggleNav}
            className={this.state.navActive ? "toggle active" : "toggle"}
          >
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
