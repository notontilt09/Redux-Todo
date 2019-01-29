export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED'
export const DELETE_TODO = 'DELETE_TODO'

export function addTodo(newTodo) {
    console.log('action', newTodo)
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}

export function toggleCompleted(index) {
    console.log('action', index)
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    }
}

export function deleteTodo(index) {
    console.log('action', index)
    return {
        type: DELETE_TODO,
        payload: index
    }
}
