import React from 'react'
// import logo from './logo.svg';
import Navigation from './components/navigation'
import About from './components/about'
import PlantsIndex from './components/plantsIndex'
import Water from './components/water'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={About} />
        <Route exact path="/plants" component={PlantsIndex} />
        <Route exact path="/water" component={Water} />
      </div>
      </Router>
    </div>
  );
}

export default App;
