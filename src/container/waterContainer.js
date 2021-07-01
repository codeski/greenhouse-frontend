import React, { Component } from 'react'
import { connect } from 'react-redux'
import WaterPlantCard from '../components/waterPlantCard'
import { Row } from "react-bootstrap"
import { fetchWatered } from '../actions/plantActions'


class WaterContainer extends Component {
    
    renderWaterCards = () => {
        return this.props.plants.map(plant => <WaterPlantCard key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>) 
    }

    handleClick = (id) => {
        this.props.fetchWatered(id)
    }
    
    render() {
        return (
            <div>
                <Row xs={1} md={3} className="g-4">
                    {this.renderWaterCards()}
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


export default connect(mapStateToProps, {fetchWatered})(WaterContainer)