import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { todo, onTodoClick } = this.props;
    const todoStyle = {
      textDecoration : todo.completed ? 'line-through' : 'none',
      cursor         : todo.completed ? 'auto' : 'pointer'
    }

    return(
      <div
        style={todoStyle}
        onClick={onTodoClick}
      >
        {todo.text}
      </div>
    );
  }
}

export default Todo;