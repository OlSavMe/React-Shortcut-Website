import React from 'react';
// Reusable components
import { Nav, Footer, Header } from "../../components/index.jsx";


// Stylesheets
import "./stylesheets/OurTeamStyles.scss";
import Teammate from './Teammate';
import Boardmember from './BoardMember';


export default function OurTeam() {
  return (
    <>
      <Nav />
      <main className="our-team">
        <Header
          title="Our Team"
          subtitle="To get in touch with us: firstname (at) theshortcut.org"
        />
        <Teammate />
        <Header
          title="Our Board"
        />
        <Boardmember />
      </main>
      <Footer />
    </>

  );

};
