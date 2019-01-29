import React from 'react'
import { connect } from 'react-redux'

class TodoList extends React.Component {
    state = {
        newTodo: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addTodo = () => {

    }

    render() {
        return (
            <form>
                <input 
                    type='text' 
                    placeholder='add todo...'
                    name='newTodo'
                    onChange={this.handleChanges}
                    value={this.state.newTodo}    
                />
                <button onClick={this.addTodo}>Add</button>
            </form>
        )
    }
   
}

export default TodoList;