import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions'

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
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => 
                    action.payload !== index
                )
            }
        default:
            return state;
    }
}

export default reducer;