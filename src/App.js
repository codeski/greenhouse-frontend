import React from 'react'
import Navigation from './components/navigation'
import About from './components/about'
import PlantsIndex from './components/plantsIndex'
import Water from './components/water'
import NoMatch from './components/noMatch'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { connect } from 'react-redux'
import { fetchPlants } from './actions/plantActions'
import { Layout } from './components/layout'


class App extends React.Component {
  
  componentDidMount(){
    this.props.fetchPlants()
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Layout>
            <Router>
              <Navigation />
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/plants" component={PlantsIndex} />
                <Route exact path="/water" component={Water} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      </div>
    )
  } 

}

const mapDispatchToProps = (dispatch) => ({
  fetchPlants: () => dispatch(fetchPlants())
})

export default connect(null, mapDispatchToProps)(App);
