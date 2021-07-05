const URL = "http://localhost:3001/plants/"

export const addPlant = (plant) => ({type: 'ADD_PLANT', payload: plant})

export const addPlants = (plants) => ({type: 'ADD_PLANTS', payload: plants})

export const deletePlant = (id) => ({type: 'DELETE_PLANT', payload: id})

export const waterPlant = (plant) => ({type: 'WATERED', payload: plant})

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

export function fetchDelete(id) {
    let configObj = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    return (dispatch) => {
        fetch(URL + id, configObj)
        .then(resp => resp.json())
        .then(plant => dispatch(deletePlant(id)))
    }
}

export function fetchWaterUpdate(id) {
    let configObj = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    return (dispatch) => {
        fetch(URL + id, configObj)
        .then(resp => resp.json())
        .then(plant => dispatch(waterPlant(plant)))
    }
}