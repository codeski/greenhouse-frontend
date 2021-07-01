import React from 'react'
import { Card, Button } from "react-bootstrap"

const Plant = (props) => {
    // console.log(props)
    return (
        <div key={props.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.plant.image} />
                <Card.Body>
                    <Card.Title>{props.plant.nickname}</Card.Title>
                    <Card.Text>
                        {props.plant.species}<br/>
                        {props.plant.description}
                    </Card.Text>
                    <Button onClick={() => props.handleClick(props.id)} variant="primary">Delete Plant</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Plant