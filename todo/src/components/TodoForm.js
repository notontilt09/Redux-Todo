import React from 'react'

const TodoForm = props => {
    return (
        <form>
            <input type='text' placeholder='add todo...' />
            <button>Add</button>
        </form>
    )
}

export default TodoForm;