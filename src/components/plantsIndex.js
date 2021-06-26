import React from 'react'
import PlantsContainer from '../container/plantsContainer'
import PlantInput from './plantInput'
import { connect } from 'react-redux'



class PlantsIndex extends React.Component {
    
    render(){
        return (
            <div>
                <PlantsContainer plants={this.props.plants}/> 
                <PlantInput />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        plants: state.plants
    })
}

export default connect(mapStateToProps)(PlantsIndex)


