import React, { Component } from 'react';

class Todo extends Component {
  handleTodoClick = () => {
    const { todo, onTodoClick } = this.props;
    onTodoClick(todo.id);
  }

  render() {
    // console.log('todo rendering ~!')
    const { todo } = this.props;
    const todoStyle = {
      textDecoration : todo.complete ? 'line-through' : 'none',
      cursor         : todo.complete ? 'auto' : 'pointer'
    }

    return(
      <div
        style={todoStyle}
        onClick={this.handleTodoClick}
      >
        {todo.text}
      </div>
    );
  }
}

export default Todo;