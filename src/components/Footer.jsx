import React from "react";
import css from "./Footer.module.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={css.footer}>
        <div className={css.container}>
          <div className={css.left}>
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
                <p>FAQ</p>
                <p>Careers</p>
                <p>Terms of use</p>
                <p>Privacy policy</p>
                <p>Code of coduct</p>
              </div>
              <div>
                <h4>Programs</h4>
                <p>Events</p>
                <p>Trainings</p>
                <p>Certifications</p>
                <p>Clubs</p>
              </div>
              <div>
                <h4>Resources</h4>
                <p>For partners</p>
                <p>For media</p>
                <p>Yearbook</p>
                <p>Whitepaper</p>
                <p>Blog</p>
              </div>
            </div>

            <p className={css.copyright}>
              {" "}
              © 2020, The Shortcut. All rights reserved.
            </p>
          </div>

          <div className={css.right}>
            <p className={css.text}>
              The Shortcut is the largest talent accelerator in the Nordics. We
              equip foreign talent with the skills and networks they need to
              succeed in the startup world.
            </p>
            <div>
              <form>
                <h4>Subscribe to our newsletter</h4>
                <input type="text" />
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
          </div>
        </div>
      </footer>
    );
  }
}
