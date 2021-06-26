const URL = "http://localhost:3001/plants"

export const addPlant = (plant) => ({type: 'ADD_PLANT', payload: plant})

export const addPlants = (plants) => ({type: 'ADD_PLANTS', payload: plants})

export function fetchPlants(){
    return (dispatch) => {
        fetch(URL)
        .then(resp => resp.json())
        .then(plants => dispatch(addPlants(plants)))
    }
}

