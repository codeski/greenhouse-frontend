import React, { Component } from 'react'
import {Form, FormControl, Button, Row } from "react-bootstrap"
import { connect } from 'react-redux'
import Plant from '../components/plant'
import {fetchDelete} from '../actions/plantActions'

class PlantsContainer extends Component {

    state = {
        searchTerm: '', 
        search: ''
    }

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    search = (e) => {
            // this.props.plants.filter(plant => plant.nickname.includes(e.target.value) === this.state.searchTerm)
            this.setState({
                search: e.target.value
            })

    }

    handleClick = (id) => {
        console.log('clicked')
        this.props.fetchDelete(id)
    }

    renderPlants = () => {
        // console.log(this.props.plants)
        return this.props.plants.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
    }

    searchOrRender = () => {
        if (this.state.searchTerm !== '') {
            const filtered = this.props.plants.filter(plant => plant.nickname.includes(this.state.searchTerm))

            return filtered.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
        } else {
            return this.renderPlants()
        }
    }
    
    
    render() {
        return (
            <div>
                <h1>Plants Index</h1>
                <Form inline>
                    <FormControl onChange={this.handleSearchChange} type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchTerm}/>
                    <Button onClick={this.search} variant="outline-success">Search</Button>
                </Form>

                <Row xs={1} md={3} className="g-4">
                    {this.searchOrRender()}
                {/* {this.renderPlants()} */}
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


export default connect(mapStateToProps, {fetchDelete})(PlantsContainer)
