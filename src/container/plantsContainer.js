import React, { Component } from 'react'
import {Form, FormControl, Button, Row } from "react-bootstrap"
import { connect } from 'react-redux'
import Plant from '../components/plantCard'
import {fetchDelete} from '../actions/plantActions'

class PlantsContainer extends Component {

    state = {
        searchTerm: '',
        clicked: false
    }

    handleSearchChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    clearSearch = (e) => {
            this.setState(prevState => ({
                ...prevState,
                searchTerm: '', 
            }))

    }

    handleClick = (id) => {
        this.props.fetchDelete(id)
    }


    renderPlants = () => {
        return this.props.plants.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
    }

    // searchOrRender = () => {
    //     if (this.state.searchTerm !== '') {
    //         const filtered = this.props.plants.filter(plant => plant.nickname.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    //         if (filtered.length > 0) {
    //         return filtered.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
    //         } else { return <p>"No Results"</p>}
    //     } else if (this.state.clicked){
    //         return this.sortAlphabeticalName()
    //     }else {
    //         return this.renderPlants()
    //     }
    // }

    searchOrRender = () => {
        let origionalOrder = this.props.plants
        let alphabetical = this.sortAlphabeticalName() 

        if (this.state.clicked && this.state.searchTerm !== '') {
            const alphafiltered = alphabetical.filter(plant => plant.nickname.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            if (alphafiltered.length > 0) {
                return alphafiltered.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
            } else { 
                return <p>"No Results"</p>
            }
        } else if (this.state.clicked) {
            return alphabetical.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
        } else if (this.state.searchTerm !== '') {
            let filtered = origionalOrder.filter(plant => plant.nickname.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
            if (filtered.length > 0) {
            return filtered.map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
            } else { return <p>"No Results"</p>}
        } else if (this.state.clicked){
            return this.sortAlphabeticalName()
        }else {
            return this.renderPlants()
        }
    }

    handleAlphabeticalSort = () => {
        this.setState(prevState => ({...prevState, clicked: !prevState.clicked}))
    }

    sortAlphabeticalName = () => {

        let originalOrder = this.props.plants

        let sorted = [...originalOrder].sort((a, b) => {
            let plantA = a.nickname.toLowerCase()
            let plantB = b.nickname.toLowerCase()
            if (plantA < plantB) {
                return -1
            } else if (plantA > plantB) {
                return 1
            } else
                // names must be equal
                return 0
            }
        )
        
        return sorted
        // .map(plant => <Plant key={plant.id} id={plant.id} handleClick={this.handleClick} plant={plant}/>)
    }
    
    
    render() {
        return (
            <div>
                <h1>All My Plants</h1>
                    
                <Form inline>
                    <FormControl onChange={this.handleSearchChange} type="text" placeholder="Search by Nickname" className="mr-sm-2" value={this.state.searchTerm}/>
                    <Button onClick={this.clearSearch} variant="outline-success">Clear Search</Button>
                    <Button onClick={this.handleAlphabeticalSort} variant="outline-success">{this.state.clicked ? "Undo Alphabetical" : "Order Alphabetically"}</Button>
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
