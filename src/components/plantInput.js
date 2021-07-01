import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { fetchPlant } from '../actions/plantActions'

class PlantInput extends Component {
    state = {
        nickname: '',
        species: '',
        water_days: '',
        last_watered: '',
        // light_requirements: '',
        description: '',
        location: '',
        water_amount: '',
        image: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.fetchPlant(this.state)

        this.setState({
                nickname: '',
                species: '',
                water_days: '',
                last_watered: '',
                // light_requirements: '',
                description: '',
                location: '',
                water_amount: '',
                image: ''
        })
    }
    
    
    render() {
        return (
            <div>
                <h1>Add A Plant</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Personal Name</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="nickname" placeholder="example: Bob" value={this.state.nickname}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="image" placeholder="example: http://plantImage.jpg" value={this.state.image}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label>Species</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="species" placeholder="example: Cactus" value={this.state.species}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput4">
                        <Form.Label>Water Every X Days</Form.Label>
                        <Form.Control onChange={this.handleChange} type="integer" name="water_days" placeholder="example: 7" value={this.state.water_days}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput5">
                        <Form.Label>Water Amount</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="water_amount" placeholder="example: 1 cup" value={this.state.water_amount}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput6">
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="location" placeholder="example: living room" value={this.state.location}/>
                    </Form.Group>

                    {/* <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Light Requirments</Form.Label>
                        <Form.Control onChange={this.handleChange} name="light_requirements" as="select" placeholder="select" value={this.state.location}>
                            <option>0-2 hours</option>
                            <option>2-4 hours</option>
                            <option>4-6 hours</option>
                            <option>6-8 hours</option>
                            <option>8+ hours</option>
                        </Form.Control>
                    </Form.Group> */}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={this.handleChange} name="description" as="textarea" rows={3} value={this.state.description} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}


export default connect(null, {fetchPlant})(PlantInput)