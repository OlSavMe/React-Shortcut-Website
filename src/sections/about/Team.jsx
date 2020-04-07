import React from "react";
import { Nav, Footer } from "../../components/index.jsx";
import css from "./Team.module.scss";

import Teammates from "./Teammates";
import Boardmembers from "./BoardMembers";

export default function Team() {
  return (
    <>
      <Nav />
      <header className={css.header}>
        <div>
          <h2>Our team</h2>
          <p>
            To get in touch with us: <br></br>
            firstname (at) theshortcut.org
          </p>
        </div>
        <div className={css.illustration}>
          <img
            src={require("../../assets/illustrations/Illustrations_member-pic.png")}
            alt="illustration"
          />
        </div>
      </header>
      <main className={css.main}>
        <Teammates />
        <h3 className={css.heading}>Board members</h3>
        <Boardmembers />
      </main>
      <Footer />
    </>
  );
}
