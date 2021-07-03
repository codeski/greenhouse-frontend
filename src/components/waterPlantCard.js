import React from 'react'
import { Card, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { fetchWaterUpdate } from '../actions/plantActions'



class WaterPlantCard extends React.Component {

    state = {
        timer: 'loading',
        days: 0,
        needsWatered: ''
    }

    addDays = (date, days) => {
        let result = new Date(date)
        result.setDate(result.getDate() + days)
        return result.toDateString()
    }

    displayDate = (date) => {
        let display = new Date(date)
        return display.toDateString()
    }

    makeTimer = () => {
        let needsWatered = this.addDays(this.props.plant.last_watered, this.props.plant.water_days)
        let difference = (new Date(needsWatered).getTime()) - (new Date().getTime())
        
        let seconds = Math.floor(difference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        this.setState({
            timer: days + " days",
            days: days
        })
    }

    componentDidMount(){

        this.interval = setInterval(() => {
            // console.log("starting timer")  
            this.makeTimer()
        }, 1000)
           
 
    }
        
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    renderCardColor = (days) => {
        // console.log(days)
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

    handleClick = (id) => {
        this.props.fetchWaterUpdate(id)
        this.setState({
            timer: 'loading',
            days: 'loading'
        })
    }

    displayNextWaterCoutdownDisplay = () => {
        if (this.state.days === 0){
            return "Tomorrow"
        } else if (this.state.days === -1) {
            return "Today"
        } else if (this.state.days < -1){
            return this.state.days + " days ago"
        } else {
            return this.state.days + " days from now"
        }
    }

    render() {
        return (
            <div key={this.props.plant.id}>
                
                <Card
                    bg={this.renderCardColor(this.state.days)}
                    key={this.props.plant.id}
                    // text={this.renderCardColor(this.state.days).toLowerCase() === 'light' ? 'dark' : 'white'} 
                    style={{ width: '18rem' }}
                    className="mb-2"
                    >
                    <Card.Img bg={this.renderCardColor(this.props.plant.days)} variant="top" src={this.props.plant.image} />
                    <Card.Body>
                        <Card.Title>{this.props.plant.nickname}</Card.Title>
                        <Card.Text>
                            Water amount: {this.props.plant.water_amount}<br/>
                            Location: {this.props.plant.location}<br/>
    
                            water every: {this.props.plant.water_days} days<br/>
                            Last Watered: {this.displayDate(this.props.plant.last_watered)}<br/>
                            Needs Watered: {this.addDays(this.props.plant.last_watered, this.props.plant.water_days)}<br/>
                            Water: {this.displayNextWaterCoutdownDisplay()}
                            
                        </Card.Text>
                        <Button onClick={() => this.handleClick(this.props.plant.id)} variant="primary">Water Plant</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }


}


export default connect(null, { fetchWaterUpdate })(WaterPlantCard)

