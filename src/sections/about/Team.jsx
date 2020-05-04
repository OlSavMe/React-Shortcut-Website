import React from "react";
import { Nav, Footer } from "../../components/index.jsx";
import css from "./Team.module.scss";
import Teammates from "./Teammates";
import Boardmembers from "./BoardMembers";

export default function Team() {
  return (
    <>
      <Nav />
      <div className={css.container}>
        <header>
          <div>
            <h2>Our team</h2>
            <p>
              To get in touch with us: <br />
              firstname@theshortcut.org
            </p>
          </div>

          <div>
            <img
              src={require("../../assets/illustrations/team-photo.png")}
              alt="illustration"
            />
          </div>
        </header>
        <main className={css.main}>
          <Teammates />
          <h3 className={css.heading}>Board members</h3>
          <Boardmembers />
        </main>
      </div>
      <Footer />
    </>
  );
}
