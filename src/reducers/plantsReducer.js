export default function plantsReducer(state = [], action) {
    switch(action.type){
        case 'ADD_PLANTS':
            // console.log(action.payload)
            return action.payload
        case 'ADD_PLANT':
            // console.log(action.payload)
            return [...state, action.payload]
        case 'DELETE_PLANT':
            const newState = state.filter(plant => plant.id !== action.payload)
            
            return newState
        case 'WATERED':
            const updated = state.map(plant => {
                if (plant.id === action.payload.id){
                    return action.payload
                } else {
                    return plant
                }
            })
            // console.log(action.payload)
            return [...updated]
        default: 
            return state
    }
}