import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class TodoList extends React.Component {
    state = {
        newTodo: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo)
    }

    render() {
        return (
            <>
                <input 
                    type='text' 
                    placeholder='add todo...'
                    name='newTodo'
                    onChange={this.handleChanges}
                    value={this.state.newTodo}    
                />
                <button onClick={this.addTodo}>Add</button>
                <div>
                    {this.props.todos.map((todo, index) => 
                        <h3 key={index}>{todo.value}</h3>
                        )}
                </div>

            </>
        )
    } 
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(TodoList);