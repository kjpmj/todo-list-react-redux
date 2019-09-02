import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Filter from './components/Filter';
import SearchTodo from './components/SearchTodo';
import axios from 'axios';

class App extends Component {
  render() {
    
    axios.get('/todos')
      .then(res => res.data)
      .then((data)=>{
        console.log(data);
      });

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
