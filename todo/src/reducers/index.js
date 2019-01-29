import { ADD_TODO, TOGGLE_COMPLETED } from '../actions'

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
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index
                    ? {...todo, completed: !todo.completed }
                    : todo
                )
            }
        default:
            return state;
    }
}

export default reducer;