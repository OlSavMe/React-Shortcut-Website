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
import Press from "./sections/resources/Press";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
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
            <Route path="/press">
              <Press />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
