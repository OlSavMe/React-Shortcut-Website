import React, { useState } from "react";
import "./Nav.scss";

import { Link } from "react-router-dom";

const Nav = () => {
  const [navActive, setnavActive] = useState(false);
  const [subnavActive, setSubnavActive] = useState(false);

  const toggleNav = () => {
    setnavActive(!navActive);
  };

  const toggleSubnav = (e) => {
    const { id, nextSibling } = e.target;
    if (id === "about" || id === "resources") {
      setSubnavActive(!subnavActive);
      !subnavActive
        ? nextSibling.classList.add("active")
        : nextSibling.classList.remove("active");
    }
  };

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
            <Link to="/">
              <img
                src={require("../../assets/icons/shortcut-logo-mobile.png")}
                alt="shortcut-logo"
              />
            </Link>
          </div>
        </div>
        <nav>
          <ul className={navActive ? "menu active" : "menu"}>
            <li className="menu-item">
              <p
                href="/#"
                className="btn"
                id="about"
                onClick={(e) => toggleSubnav(e)}
              >
                About
              </p>
              <ul className="submenu">
                <Link to="/story" className="submenu-item" onClick={toggleNav}>
                  <div>
                    <img
                      src={require("../../assets/icons/nav/about.png")}
                      alt="icon"
                    />
                  </div>
                  <span>About us</span>
                </Link>
                <Link
                  to="/success"
                  className="submenu-item"
                  onClick={toggleNav}
                >
                  <div>
                    <img
                      src={require("../../assets/icons/nav/success.png")}
                      alt="icon"
                    />
                  </div>
                  <span>Success stories</span>
                </Link>
                <Link to="/team" className="submenu-item" onClick={toggleNav}>
                  <div>
                    <img
                      src={require("../../assets/icons/nav/team.png")}
                      alt="icon"
                    />
                  </div>
                  <span>Our team</span>
                </Link>
                <Link to="/code" className="submenu-item" onClick={toggleNav}>
                  <div>
                    <img
                      src={require("../../assets/icons/nav/code.png")}
                      alt="icon"
                    />
                  </div>
                  <span>Code of conduct</span>
                </Link>

                <Link to="/faq" className="submenu-item" onClick={toggleNav}>
                  <div>
                    <img
                      src={require("../../assets/icons/nav/faq.png")}
                      alt="icon"
                    />
                  </div>
                  <span>FAQ</span>
                </Link>
                <Link
                  to="/contact"
                  className="submenu-item"
                  onClick={toggleNav}
                >
                  <div>
                    <img
                      src={require("../../assets/icons/nav/contact.png")}
                      alt="icon"
                    />
                  </div>
                  <span>Contact</span>
                </Link>
              </ul>
            </li>
            <li className="menu-item" id="events">
              <Link className="btn" to="/events" onClick={toggleNav}>
                Events
              </Link>
            </li>

            <li className="menu-item" id="resources">
              <p
                className="btn"
                href="#resources"
                id="resources"
                onClick={(e) => toggleSubnav(e)}
              >
                Resources
              </p>
              <ul className="submenu">
                <a
                  className="submenu-item"
                  onClick={toggleNav}
                  href="https://theshortcut.org/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={require("../../assets/icons/nav/blog.png")}
                      alt="icon"
                    />
                  </div>
                  <span>Blog</span>
                </a>
                <a
                  className="submenu-item"
                  onClick={toggleNav}
                  href="https://www.instagram.com/theshortcutorg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={require("../../assets/icons/nav/gallery.png")}
                      alt="icon"
                    />
                  </div>
                  <span>Gallery</span>
                </a>

                <a
                  className="submenu-item"
                  onClick={toggleNav}
                  href="https://theshortcut.org/wp-content/uploads/2019/11/white-paper-diversity-and-inclusion-in-tech.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div>
                    <img
                      src={require("../../assets/icons/nav/whitepaper.png")}
                      alt="icon"
                    />
                  </div>
                  <span>White paper</span>
                </a>
                <Link to="/media" className="submenu-item" onClick={toggleNav}>
                  <div>
                    <img
                      src={require("../../assets/icons/nav/for-media.png")}
                      alt="icon"
                    />
                  </div>
                  <span>For media</span>
                </Link>
              </ul>
            </li>

            <li className="menu-item" id="forpartners">
              <Link className="btn" to="/forpartners" onClick={toggleNav}>
                For partners
              </Link>
            </li>

            <li className="menu-item" id="join">
              <a
                className="btn"
                onClick={toggleNav}
                href="https://www.facebook.com/theshortcut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join
              </a>
            </li>
          </ul>
        </nav>

        <div
          onClick={toggleNav}
          className={navActive ? "toggle active" : "toggle"}
        >
          <div className="hamburger"></div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
