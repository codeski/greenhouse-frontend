import React from 'react'
import { Card, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { fetchWaterUpdate } from '../actions/plantActions'



class WaterPlantCard extends React.Component {

    state = {
        days: 'loading'
    }

    displayDate = (date) => {
        let display = new Date(date)
        return display.toDateString()
    }

    makeTimer = () => {
        let needsWateredDate = this.props.addDays(this.props.plant.last_watered, this.props.plant.water_days)
        let difference = (new Date(needsWateredDate).getTime()) - (new Date().getTime())
        
        let seconds = Math.floor(difference / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        let days = Math.floor(hours / 24)

        // hours %= 24
        // minutes %= 60
        // seconds %= 60

        this.setState({
            days: days
        })
    }

    componentDidMount(){
        this.makeTimer()
        this.interval = setInterval(this.makeTimer, 1000 * 60 * 60)
    }
        
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    renderCardColor = (days) => {
        if (days === 'undefined'){
            return 'success'
        } else if (days > 0) {
            return 'success'
        } else if (days === 0) {
            return 'warning'
        } else if (days < 0) {
            return 'danger'
        }
    }

    handleClick = async (id) => {
        await this.props.fetchWaterUpdate(id)
        this.makeTimer()
    }

    displayNextWaterCoutdownDisplay = (days) => {
        if (days === 0){
            return "Tomorrow"
        } else if (days === -1) {
            return "Today"
        } else if (days < -1){
            return days + " days ago"
        } else {
            return days + 1 + " days from now"
        }
    }

    render() {
        return (
            <div key={this.props.plant.id}>
                
                <Card
                    bg={this.renderCardColor(this.state.days)}
                    key={this.props.plant.id}
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Img bg={this.renderCardColor(this.props.plant.days)} variant="top" src={this.props.plant.image} />
                    <Card.Body>
                        <Card.Title>{this.props.plant.nickname}</Card.Title>
                        <Card.Text>
                        <b>Water amount:</b> {this.props.plant.water_amount}<br/>
                        <b>Location:</b> {this.props.plant.location}<br/>
    
                        <b>Water every:</b> {this.props.plant.water_days} days<br/>
                        <b>Last watered:</b> {this.displayDate(this.props.plant.last_watered)}<br/>
                        <b>Needs watered:</b> {this.props.addDays(this.props.plant.last_watered, this.props.plant.water_days)}<br/>
                        <b>Water:</b> {this.displayNextWaterCoutdownDisplay(this.state.days)}
                            
                        </Card.Text>
                        <Button onClick={() => this.handleClick(this.props.plant.id)} variant="primary">Water Plant</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }


}

export default connect(null, { fetchWaterUpdate })(WaterPlantCard)

