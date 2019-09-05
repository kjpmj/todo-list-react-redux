import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Filter from './components/Filter';
import SearchTodo from './components/SearchTodo';

class App extends Component {
  render() {
    return (
      <div>
        <SearchTodo/>
        <AddTodoForm/>
        <TodoList/>
        <Filter/>
      </div>
    );
  }
}

export default App;
