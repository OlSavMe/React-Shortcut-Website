import React, { Component } from "react";
import "./App.scss";
import LandingPage from "./sections/index/LandingPage";
import Contact from "./sections/about/Contact";
import OurStory from "./sections/about/OurStory";
import OurTeam from "./sections/about/OurTeam";
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/home">
              <LandingPage />
            </Route>
            <Route path="/ourstory">
              <OurStory />
            </Route>
            <Route path="/ourteam">
              <OurTeam />
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
