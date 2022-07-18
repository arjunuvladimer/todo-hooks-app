// Imported type of actions which are strings inside an obj
import {TODO_ACTION_TYPES} from './todo.types'


// Action Creators

// ADD TODO
export const addTodo = (todoName) => {
    return(
        {
            type: TODO_ACTION_TYPES.ADD_TODO,
            payload: todoName
        }
    )
}

// UPDATE TODO
export const updateTodo = (todoID) => {
    return(
        {
            type: TODO_ACTION_TYPES.UPDATE_TODO,
            payload: todoID
        }
    )
}

// DELETE TODO
export const deleteTodo = (todoID) => {
    return(
        {
            type: TODO_ACTION_TYPES.DELETE_TODO,
            payload: todoID
        }
    )
}