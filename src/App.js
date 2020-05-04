import React, { Component } from "react";

// Home
import Home from "./sections/home/Home";

// About
import Story from "./sections/about/Story";
import Team from "./sections/about/Team";
import Code from "./sections/about/Code";
import FAQ from "./sections/about/FAQ";
import Contact from "./sections/about/Contact";

// Resources
import ForMedia from "./sections/resources/ForMedia";

// Events
import AllEvents from "./sections/events/AllEvents";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivacyPolicies from "./sections/home/PrivacyPolicies";

export class App extends Component {
  state = {
    loading: true,
  };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Home */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>

            {/* About */}
            <Route path="/story">
              <Story />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/code">
              <Code />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>

            {/* Resources */}
            <Route path="/media">
              <ForMedia />
            </Route>

            {/* All events */}
            <Route path="/all-events">
              <AllEvents />
            </Route>

            {/* Footer */}
            <Route path="/privacy">
              <PrivacyPolicies />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
