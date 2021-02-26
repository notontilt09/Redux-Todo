import React from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleCompleted, deleteTodo } from '../actions'

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
        if (this.state.newTodo) {
            this.props.addTodo(this.state.newTodo);
        }
        this.setState({
            newTodo: ''
        })
    }

    toggleCompleted = (e, index) => {
        e.preventDefault();
        this.props.toggleCompleted(index)
    }

    deleteTodo = (e, index) => {
        e.preventDefault();
        this.props.deleteTodo(index);
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
                        <div className='todo' key={index}>
                            <div className={`${todo.completed}`}
                                onClick={e => this.toggleCompleted(e, index)} 
                            >
                            {todo.value}
                            </div>
                            <span 
                                onClick={e => this.deleteTodo(e, index)} 
                                className='delete'
                                role='img'
                                aria-label='delete'    
                            >
                            ❌
                            </span>
                        </div>
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

export default connect(mapStateToProps, { addTodo, toggleCompleted, deleteTodo })(TodoList);