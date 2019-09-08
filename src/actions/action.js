import axios from 'axios';

/** 액션 타입 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const FETCH_TODO = 'FETCH_TODO';
export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH = 'SET_SEARCH';
export const FETCH_START = 'FETCH_START';
export const FETCH_END = 'FETCH_END';

/** 필터 종류 */
export const filterType = {
  SHOW_ALL : 'SHOW_ALL',
  SHOW_COMPLETED : 'SHOW_COMPLETED',
  SHOW_ACTIVE : 'SHOW_ACTIVE'
}

/** 액션 생성함수 */
export const addTodo = (text) => {
  return {type : ADD_TODO, text}
}
export const completeTodo = (id) => {
  return {type : COMPLETE_TODO, id}
}
export const fetchTodo = (payload) => {
  return {type : FETCH_TODO, payload}
}
export const setFilter = (filter) => {
  return {type : SET_FILTER, filter}
}
export const setSearch = (searchText) => {
  return {type : SET_SEARCH, searchText}
}
export const fetchStart = () => {
  return {type : FETCH_START}
}
export const fetchEnd = () => {
  return {type : FETCH_END}
}


/** thunk */
export const fetchTodoAsync = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios.get('/todos')
      .then(resp => {
        dispatch(fetchTodo(resp.data));
        dispatch(fetchEnd(resp.data))
      })
  }
}

export const deleteTodoAsync = (id) =>{
  return (dispatch) => {
    axios.delete(`/todos/${id}`)
      .then(resp => dispatch(fetchTodo(resp.data)))
  }
}

export const addTodoAsync = (text) => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios.post('/todos', {
      text : text
    })
    .then(resp => {
      dispatch(fetchTodo(resp.data))
      dispatch(fetchEnd(resp.data))
    })
  }
}

export const completeTodoAsync = (todo) => {
  return (dispatch) => {
    axios.put(`/todos/${todo._id}`, {
      complete : !todo.complete
    })
    .then(resp => dispatch(fetchTodo(resp.data)))
  }
}