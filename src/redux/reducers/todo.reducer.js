import {TODO_ACTION_TYPES} from '../actions/todo.types'

const INTIAL_STATE = {
    todos: []
}

// Takes two parameters
// state
// action => {type, payload}
const todoReducer = (state = INTIAL_STATE, action) => {
    switch (action) {
        case TODO_ACTION_TYPES.ADD_TODO:
            
            break;

        case TODO_ACTION_TYPES.UPDATE_TODO:
            
            break;

        case TODO_ACTION_TYPES.DELETE_TODO:
            
            break;

        default:
            return state
    }
}

export default todoReducer