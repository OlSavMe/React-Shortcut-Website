import React, { Component } from "react";
import LP from "./sections/lp/LP";
import Contact from "./sections/about/Contact";
import Story from "./sections/about/Story";
import Team from "./sections/about/Team";
import FAQ from "./sections/about/FAQ";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <LP />
            </Route>
            <Route path="/home">
              <LP />
            </Route>
            <Route path="/story">
              <Story />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
