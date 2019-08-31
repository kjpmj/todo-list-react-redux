import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo, filterType } from '../actions/action';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos, onTodoClick } = this.props;
    const todoCompoList = todos.map(todo=> 
      <Todo
        todo={todo}
        key={todo.id}
        onTodoClick={onTodoClick}
      />
    );

    return(
      <div>
        {todoCompoList}
      </div>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch(filter){
  case filterType.SHOW_COMPLETED:
    return todos.filter(todo => todo.complete);
  case filterType.SHOW_ACTIVE:
    return todos.filter(todo => !todo.complete);
  default:
    return todos;   
  }
}

const mapStateToProps = (state) =>{
  return {
    todos : (() => {
      const todos = getVisibleTodos(state.todos, state.filter).filter(todo => todo.text.includes(state.searchText));
      return todos;
    })() 
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : id => {
      dispatch(completeTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);