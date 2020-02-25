import React, { Component } from "react";
// Reusable components
import { Nav, Footer, Header } from "../../components/index.jsx";
// Non-reusable components

// Stylesheets
import "./stylesheets/ContactStyles.scss";

export class Contact extends Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <Header title="Contact" />
          <p>Contact information goes here</p>
        </main>
        <Footer />
      </>
    );
  }
}

export default Contact;
