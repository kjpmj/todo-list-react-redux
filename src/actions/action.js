/** 액션 타입 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const SET_SEARCH = 'SET_SEARCH';

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
export const completeTodo = (index) => {
  return {type : COMPLETE_TODO, index}
}
export const setFilter = (filter) => {
  return {type : SET_FILTER, filter}
}
export const setSearch = (searchText) => {
  return {type : SET_SEARCH, searchText}
}