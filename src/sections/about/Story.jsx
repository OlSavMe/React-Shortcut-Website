import React, { Component } from "react";
import { Nav, Footer } from "../../components/index.jsx";
import css from "./Story.module.scss";

export class Story extends Component {
  render() {
    return (
      <>
        <Nav />
        <header className={css.header}>
          <h2>Our story</h2>
          <div className={css.illustrationTop}>
            <img
              src={require("../../assets/illustrations/tree.png")}
              alt="illustration"
            />
          </div>
        </header>
        <main className={css.ourstory}>
          <p>
            The Shortcut is the largest talent accelerator in the Nordics. We
            equip foreign talent with the skills and networks they need to drive
            growth and innovation, and to kickstart their entry into the Finnish
            startup world.{" "}
          </p>
          <p>
            Owned by Startup Foundation, The Shortcut is a non-profit
            organization dedicated to enhancing and expanding the startup
            community in the Nordics. We are committed to helping fill the
            talent gap by addressing the needs of the ecosystem and creating
            programs that feed talent into high-growth companies. Through our
            workshops and training sessions, we help our community achieve
            personal growth through upskilling, reskilling, and expanding their
            personal networks.{" "}
          </p>
          <p>
            The Shortcut has already helped thousands of people accelerate their
            entry into the startup world; so what are you waiting for? Join our
            community – we just might be the shortcut to your dream career.{" "}
          </p>
        </main>
        <div className={css.illustrationBottom}>
          <div>
            <img
              src={require("../../assets/illustrations/people-1.png")}
              alt="illustration"
            />
          </div>
          <div>
            <img
              src={require("../../assets/icons/shortcut-logo.png")}
              alt="illustration"
            />
            <img
              src={require("../../assets/icons/shortcut-logo-mobile.png")}
              alt="illustration"
            />
          </div>
          <div>
            <img
              src={require("../../assets/illustrations/people-2.png")}
              alt="illustration"
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Story;
