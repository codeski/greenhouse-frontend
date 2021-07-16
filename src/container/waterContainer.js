import React, { Component } from 'react'
import { connect } from 'react-redux'
import WaterPlantCard from '../components/waterPlantCard'
import { Row } from "react-bootstrap"


class WaterContainer extends Component {

    addDays = (date, days) => {
        let result = new Date(date)
        result.setDate(result.getDate() + days)
        return result.toDateString()
    }

    renderPlantWaterCards = () => {

        let originalOrder = this.props.plants

        let sorted = [...originalOrder].sort((plantA, plantB) => {
            let newDateWateredDate = (this.addDays(plantA.last_watered, plantA.water_days))
            let newNextWaterDate = (this.addDays(plantB.last_watered, plantB.water_days))
            
            return new Date(newDateWateredDate) - new Date(newNextWaterDate)   
        })
        
        return sorted.map(plant => <WaterPlantCard addDays={this.addDays} lastWatered={plant.lastWatered} key={plant.id} id={plant.id} plant={plant}/>)
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