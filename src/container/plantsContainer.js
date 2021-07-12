import React, { Component } from 'react'
import {Form, FormControl, Button, Row } from "react-bootstrap"
import { connect } from 'react-redux'
import Plant from '../components/plantCard'
import {fetchDelete} from '../actions/plantActions'

class PlantsContainer extends Component {

    state = {
        searchTerm: ''
    }

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    clearSearch = (e) => {
            this.setState({
                    searchTerm: '', 
            })

    }

    handleClick = (id) => {
        this.props.fetchDelete(id)
    }


    renderPlants = () => {
        return this.props.plants.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
    }

    searchOrRender = () => {
        if (this.state.searchTerm !== '') {
            const filtered = this.props.plants.filter(plant => plant.nickname.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            if (filtered.length > 0) {
            return filtered.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
            } else { return <p>"No Results"</p>}
        } else {
            return this.renderPlants()
        }
    }
    
    
    render() {
        return (
            <div>
                <h1>All My Plants</h1>
                <Form inline>
                    <FormControl onChange={this.handleSearchChange} type="text" placeholder="Search by Nickname" className="mr-sm-2" value={this.state.searchTerm}/>
                    <Button onClick={this.clearSearch} variant="outline-success">Clear Search</Button>
                </Form>
                    
                <Row xs={1} md={3} className="g-4">
                    {this.searchOrRender()}
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
