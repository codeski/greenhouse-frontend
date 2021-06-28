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

export function fetchPlant(plant) {
    let configObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plant)
    }
    return (dispatch) => {
        fetch(URL, configObj)
        .then(resp => resp.json())
        .then(plant => dispatch(addPlant(plant)))
    }
}

