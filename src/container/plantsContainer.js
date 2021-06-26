import React, { Component } from 'react'
import {Form, FormControl, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import Plant from '../components/plant'

class PlantsContainer extends Component {



    renderPlants = () => {
        // console.log(this.props.plants)
        return this.props.plants.map(plant => <Plant plant={plant}/>)
    }
    
    
    render() {
        return (
            <div>
                <h1>Plants Index</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                {this.renderPlants()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        plants: state.plants
    })
}


export default connect(mapStateToProps)(PlantsContainer)
