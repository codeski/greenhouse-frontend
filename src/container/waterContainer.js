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
        // return this.props.plants.map(plant => <WaterPlantCard key={plant.id} id={plant.id} plant={plant}/>) 
        let sorted = this.props.plants.sort((plantA, plantB) => {
            // function(plantA, plantB){
            //     console.log(plantA, plantB)
                // let aPlantLastWatered = new Date(plantA.last_watered)
                let newDate1 = (this.addDays(plantA.last_watered, plantA.water_days))
                let newDate2 = (this.addDays(plantB.last_watered, plantB.water_days))
                // debugger
                return new Date(newDate1) - new Date(newDate2)
                
            })
        
        return sorted.map(plant => <WaterPlantCard key={plant.id} id={plant.id} plant={plant}/>)
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