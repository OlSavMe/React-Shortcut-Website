import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={css.container}>
        <section>
          <div className={css.logo}>
            <img
              src={require("../assets/shortcut-logo.png")}
              alt="shortcut-logo"
            />
          </div>
          <div className={css.icons}>
            <div>
              <a
                href="https://web.facebook.com/theshortcut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/facebook.png")}
                  alt="facebook-icon"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/theshortcutorg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/instagram.png")}
                  alt="instagram-icon"
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/theshortcutorg?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/twitter.png")}
                  alt="twitter-icon"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/theshortcut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../assets/icons/linkedin.png")}
                  alt="linkedin-icon"
                />
              </a>
            </div>
          </div>

          <div className={css.menu}>
            <div>
              <h4>About</h4>
              <Link to="/faq">
                <a href="/faq">FAQ</a>
              </Link>
              <Link to="/code">
                <a href="/code">Code of coduct</a>
              </Link>
              <a href="/">Careers</a>
              <a href="/">Terms of use</a>
              <Link to="/privacy">
                <a href="/privacy">Privacy policy</a>
              </Link>
            </div>
            <div>
              <h4>Programs</h4>
              <a href="/">Events</a>
              <a href="/">Trainings</a>
              <a href="/">Certifications</a>
              <a href="/">Clubs</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="/">For partners</a>
              <a href="/">Blog</a>
              <Link to="/media">
                <a href="/media">For media</a>
              </Link>
              <a
                href="https://theshortcut.org/wp-content/uploads/2019/11/white-paper-diversity-and-inclusion-in-tech.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                White paper
              </a>
            </div>
          </div>

          <p className={css.copyright}>
            {" "}
            © 2020, The Shortcut. All rights reserved.
          </p>
        </section>

        <section>
          <p className={css.text}>
            The Shortcut is the largest talent accelerator in the Nordics. We
            equip foreign talent with the skills and networks they need to
            succeed in the startup world.
          </p>
          <div>
            <form>
              <h4>Subscribe to our newsletter</h4>
              <input type="email" />
              <input type="submit" value="Go" />
            </form>
            <div>
              <button>Contact us</button>
            </div>

            <div className={css.info}>
              <p>info@theshortcut.org | +358 46 640 3900 </p>
              <p>
                Lapinlahdenkatu 16 (Maria 01, entrance 15B), 00180 Helsinki{" "}
              </p>
              <p className={css.copyright}>
                {" "}
                © 2020, The Shortcut. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
