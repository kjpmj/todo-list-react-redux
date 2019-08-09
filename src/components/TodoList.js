import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo, filterType } from '../actions/action';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const { todos, onTodoClick } = this.props;
    console.log(todos);
    const todoCompoList = todos.map((todo, index )=> 
      <Todo
        {...todo}
        key={index}
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
    // todos : getVisibleTodos(state.todos, state.filter)
    todos : state.todos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : index => {
      dispatch(completeTodo(index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);