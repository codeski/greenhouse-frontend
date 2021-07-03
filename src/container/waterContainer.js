import React, { Component } from 'react'
import { connect } from 'react-redux'
import WaterPlantCard from '../components/waterPlantCard'
import { Row } from "react-bootstrap"


class WaterContainer extends Component {
    
    renderPlantWaterCards = () => {
        return this.props.plants.map(plant => <WaterPlantCard key={plant.id} id={plant.id} plant={plant}/>) 
    }
    
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {this.renderPlantWaterCards()}
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


export default connect(mapStateToProps)(WaterContainer)