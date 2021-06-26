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
import { connect } from 'react-redux'
import { fetchPlants } from './actions/plantActions'



class App extends React.Component {
  
  componentDidMount(){
    this.props.fetchPlants()
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/plants" component={PlantsIndex} />
          <Route exact path="/water" component={Water} />
        </Switch>
        </Router>
      </div>
    )
  } 

}

const mapDispatchToProps = (dispatch) => ({
  fetchPlants: () => dispatch(fetchPlants())
})

export default connect(null, mapDispatchToProps)(App);
