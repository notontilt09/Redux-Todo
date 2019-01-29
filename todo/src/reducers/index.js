import { ADD_TODO } from '../actions'

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                value: action.payload,
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        default:
            return state;
    }
}

export default reducer;