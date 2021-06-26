import React, { Component } from 'react'
import {Form, FormControl, Button, Row } from "react-bootstrap"
import { connect } from 'react-redux'
import Plant from '../components/plant'

class PlantsContainer extends Component {

    handleClick = () => {
        console.log('clicked')
    }

    renderPlants = () => {
        // console.log(this.props.plants)
        return this.props.plants.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
    }
    
    
    render() {
        return (
            <div>
                <h1>Plants Index</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Row xs={1} md={3} className="g-4">
                {this.renderPlants()}
                </Row>
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
