import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, FETCH_TODO, SET_FILTER, SET_SEARCH, filterType } from '../actions/action';
const { SHOW_ALL } = filterType;
let id = 4;

let todosList= [];

const filter = (state = SHOW_ALL, action) => {
  switch(action.type){
  case SET_FILTER:
    return action.filter
  default:
    return state;
  }
}

const todos = (state=todosList, action) => {
  switch(action.type){
  case ADD_TODO:
    return [...state, {id : id++, text: action.text, complete : false}];
  case COMPLETE_TODO:
    return state.map(todo => 
        todo.id === action.id
          ? {...todo, complete : !todo.complete}
          : todo
      )
  case FETCH_TODO:
    return action.payload;
  default:
    return state;
  }
}

const searchText = (state='', action) => {
  switch(action.type){
   case SET_SEARCH:
    return action.searchText;
  default:
    return state;
  }
}

const todoReducer = combineReducers({
  filter,
  todos,
  searchText
});

export default todoReducer;
