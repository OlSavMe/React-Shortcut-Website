import React from "react";
import css from "./Press.module.scss";
import { Nav, Footer } from "../../components/index.jsx";

export default function Press() {
  return (
    <div>
      <Nav />
      <div className={css.container}>
        <header>
          <div>
            {" "}
            <h2>Press</h2>
            <p>
              The Shortcut is the largest talent accelerator in the Nordics. We
              equip foreign talent with the skills and networks they need to
              succeed in the startup world.
            </p>
          </div>
          <div>
            <img
              src={require("../../assets/illustrations/4.png")}
              alt="illustration"
            />
          </div>
        </header>

        <div className={css.center}>
          <p>
            For interview requests or questions about services, please contact:{" "}
            <a href="mailto:info@theshortcut.org">info@theshortcut.org</a>
          </p>
        </div>

        <div className={css.links}>
          <div className={css.materials}>
            {" "}
            <h3>Press materials</h3>
            <ul>
              <li>
                {" "}
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Press-release_International.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Press release (international)
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Press-release_Finnish.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  &#128279; Press release (Finnish)
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Background_The_Shortcut.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; The Shortcut background
                </a>
              </li>
            </ul>
          </div>

          <div className={css.logo}>
            <h3>Logo</h3>
            <p>
              This material is intended for press-related use only. Please
              respect guidelines and instructions while using the materials.
            </p>
            <a
              href="http://theshortcut.org/wp-content/uploads/2017/02/the-Shortcut-logo-files.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#128279; The Shortcut logo files
            </a>
          </div>

          <div className={css.clippings}>
            {" "}
            <h3>Press clippings</h3>
            <ul>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/talouselama-2.12.16.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Talouselämä 2.12.16
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Demokraatti_4_5_17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Demokraatti 4.5.17
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Plan-International-16.5.17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Plan International 16.5.17
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Helsingin-Sanomat-19.5.17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Helsingin Sanomat 19.5.17
                </a>
              </li>
              <li>
                <a
                  href="https://theshortcut.org/wp-content/uploads/2017/02/Slush-19.5.17.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#128279; Slush 19.5.17
                </a>
              </li>
            </ul>
          </div>

          <div className={css.other}>
            <h3>About us around the web</h3>
            <a
              href="https://schoolofstartups.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#128279; The Shortcut School of Startups
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
