import React, { Component } from 'react';

class Todo extends Component {
  handleTodoClick = () => {
    const { todo, onTodoClick } = this.props;
    onTodoClick(todo);
  }

  handleDeleteClick = () => {
    const { todo, onDeleteClick } = this.props;
    onDeleteClick(todo._id);
  }

  render() {
    // console.log('todo rendering ~!')
    const { todo } = this.props;
    const todoStyle = {
      textDecoration : todo.complete ? 'line-through' : 'none',
      cursor         : todo.complete ? 'auto' : 'pointer'
    }

    return(
      <div>
        <div
          style={todoStyle}
          onClick={this.handleTodoClick}
        >
          {todo.text}
        </div>
        <button
          onClick={this.handleDeleteClick}
        >
          삭제
        </button>
      </div>
    );
  }
}

export default Todo;