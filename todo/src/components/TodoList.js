import React from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleCompleted } from '../actions'

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
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        })
    }

    toggleCompleted = (e, index) => {
        e.preventDefault();
        this.props.toggleCompleted(index)

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
                        <div className='todo'>
                            <div className={`${todo.completed}`}
                                onClick={e => this.toggleCompleted(e, index)} 
                                key={index}
                            >
                            {todo.value}
                            </div>
                            <div className='delete'>❌</div>
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

export default connect(mapStateToProps, { addTodo, toggleCompleted })(TodoList);