import React from "react";
// Reusable components
import { Nav, Footer, Header } from "../../components/index.jsx";
// Non-reusable components
import { Teammate } from "./Teammate.jsx";

// Stylesheets
import "./stylesheets/OurTeamStyles.scss";

export const OurTeam = () => {
  return (
    <>
      <Nav />
      <main className="our-team">
        <Header
          title="Our story"
          subtitle="To get in touch with us: firstname (at) theshortcut.org"
        />
        <div className="container">
          <Teammate />
          <Teammate />
          <Teammate />
          <Teammate />
          <Teammate />
          <Teammate />
          <Teammate />
          <Teammate />
          <Teammate />
        </div>
      </main>
      <Footer />
    </>
  );
};
