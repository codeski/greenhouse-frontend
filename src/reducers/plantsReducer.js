export default function plantsReducer(state = [], action) {
    switch(action.type){
        case 'ADD_PLANTS':
            // console.log(action.payload)
            return action.payload
        case 'ADD_PLANT':

            return action.payload
        default: 
            return state
    }
}