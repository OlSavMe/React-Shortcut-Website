import React, { Component } from "react";

// Reusable components
import { Nav, Footer } from "../../components/index.jsx";

// Stylesheets
import css from "./Story.module.scss";

export class Story extends Component {
  render() {
    return (
      <>
        <Nav />
        <header className={css.header}>
          <h2>Our story</h2>
          <div className={css.illustration1}>
            <img
              src={require("../../assets/illustrations/Illustrations_big-green-three.png")}
              alt="illustration"
            />
          </div>
        </header>
        <main className={css.ourstory}>
          <p className={css.p}>
            The Shortcut is the largest talent accelerator in the Nordics. We
            equip foreign talent with the skills and networks they need to drive
            growth and innovation, and to kickstart their entry into the Finnish
            startup world.{" "}
          </p>
          <p className={css.p}>
            Owned by Startup Foundation, The Shortcut is a non-profit
            organization dedicated to enhancing and expanding the startup
            community in the Nordics. We are committed to helping fill the
            talent gap by addressing the needs of the ecosystem and creating
            programs that feed talent into high-growth companies. Through our
            workshops and training sessions, we help our community achieve
            personal growth through upskilling, reskilling, and expanding their
            personal networks.{" "}
          </p>
          <p className={css.p}>
            The Shortcut has already helped thousands of people accelerate their
            entry into the startup world; so what are you waiting for? Join our
            community – we just might be the shortcut to your dream career.{" "}
          </p>
          <div className={css.illustration2}>
            <img
              src={require("../../assets/illustrations/Illustrations_big-group-people.png")}
              alt="illustration"
            />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Story;
