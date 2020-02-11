import React from 'react';
import './App.css';
// import RevRestaurants from './components/RevRestaurants';
import {
  BrowserRouter as Router, Route, Switch // Redirect 
} from 'react-router-dom';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <Router>
      <Switch>
        <>

          <div>
            <Route path="/" exact component={LandingPage} />
          </div>

        </>
      </Switch>
    </Router>
  );
}

export default App;
