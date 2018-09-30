import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
  }
  
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <ul>
        {
          this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => this.props.onTodoClick(todo.id)}
            />
          ))
        }
      </ul>
    )
  }
}

export default TodoList