import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodoAsync, filterType, fetchTodoAsync, deleteTodoAsync } from '../actions/action';
import Todo from './Todo';

class TodoList extends Component {
  componentDidMount() {
    this.props.onFetchTodo();
  }

  render() {
    const { todos, onTodoClick, onDeleteClick, isFetching } = this.props;

    console.log(isFetching);
    const todoCompoList = todos.map(todo=>
      <Todo
        todo={todo}
        key={todo._id}
        onTodoClick={onTodoClick}
        onDeleteClick={onDeleteClick}
      />
    );

    return(
      <div>
        {isFetching ? (<div>로딩중</div>) : todoCompoList}
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
    })(),
    isFetching : state.isFetching
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick : todo => {
      dispatch(completeTodoAsync(todo))
    },
    onFetchTodo : () => {
      dispatch(fetchTodoAsync())
    },
    onDeleteClick : id =>{
      dispatch(deleteTodoAsync(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);