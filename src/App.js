import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Home
import Home from "./sections/home/Home";

// About
import Story from "./sections/about/1_story/Story";
import Team from "./sections/about/2_team/Team";
import Code from "./sections/about/3_code/Code";
import FAQ from "./sections/about/4_faq/FAQ";
import Contact from "./sections/about/5_contact/Contact";

// Resources
import ForMedia from "./sections/resources/3_formedia/ForMedia";

// Events
import AllEvents from "./sections/events/AllEvents";

// Footer
import PrivacyPolicies from "./sections/footer/PrivacyPolicies";

export class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {/* Home */}
          <Route exact path="/" component={Home} />

          {/* About */}
          <Route path="/story" component={Story} />
          <Route path="/team" component={Team} />
          <Route path="/code" component={Code} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />

          {/* Resources */}
          <Route path="/media" component={ForMedia} />

          {/* All events */}
          <Route path="/all-events" component={AllEvents} />

          {/* Footer */}
          <Route path="/privacy" component={PrivacyPolicies} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
