import React from 'react'
import { Card, Button } from "react-bootstrap"



const WaterPlantCard = (props) => {

    function addDays(date, days) {
        let result = new Date(date)
        result.setDate(result.getDate() + days)
        return result.toDateString()
    }

    function displayDate(date){
        let display = new Date(date)
        return display.toDateString()
    }

    let lastWatered = displayDate(props.plant.last_watered)
    
    let needsWatered = addDays(props.plant.last_watered, props.plant.water_days)

    let timer = setInterval(function() {
        makeTimer(difference)
      }, 1000)

    let difference = (new Date(needsWatered).getTime()) - (new Date().getTime())
    
    // let get = difference
    console.log(difference)

function makeTimer(diff) {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;



    return days + "days" + hours + "hours" + seconds + "seconds"

}

    return (
        <div key={props.plant.id}>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.plant.image} />
                <Card.Body>
                    <Card.Title>{props.plant.nickname}</Card.Title>
                    <Card.Text>
                        Water amount: {props.plant.water_amount}<br/>
                        Location: {props.plant.location}<br/>

                        water every: {props.plant.water_days} days<br/>
                        Last Watered: {lastWatered}<br/>
                        Needs Watered: {needsWatered}<br/>
                        Days until next water: {makeTimer(difference)}
                        
                    </Card.Text>
                    <Button onClick={() => props.handleClick(props.plant.id)} variant="primary">Water Plant</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default WaterPlantCard

// [

//     'Success', // good 
//     'Danger', //past due for watering
//     'Warning', //water today
//   ].map((variant, idx) => ( */}
/* //     <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
      style={{ width: '18rem' }}
      className="mb-2"
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{variant} Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div> */
//     )
// }
