import React from 'react'
import { Card, Button } from "react-bootstrap"

const Plant = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.plant.image} />
                <Card.Body>
                    <Card.Title>{props.plant.nickname}</Card.Title>
                    <Card.Text>
                        <h6>{props.plant.species}</h6>
                        {props.plant.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Plant

// [

//     'Success', // good 
//     'Danger', //past due for watering
//     'Warning', //water today
//   ].map((variant, idx) => (
//     <Card
//       bg={variant.toLowerCase()}
//       key={idx}
//       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//       style={{ width: '18rem' }}
//       className="mb-2"
//     >
//       <Card.Header>Header</Card.Header>
//       <Card.Body>
//         <Card.Title>{variant} Card Title </Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the bulk
//           of the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>