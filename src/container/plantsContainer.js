import React, { Component } from 'react'
import {Form, FormControl, Button } from "react-bootstrap"

export default class PlantsContainer extends Component {
    render() {
        return (
            <div>
                <h1>Plants Index</h1>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        )
    }
}
