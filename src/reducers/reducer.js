import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_FILTER, SET_SEARCH, filterType } from '../actions/action';
const { SHOW_ALL } = filterType;
const todosList = [
  {text: '집가고싶다.', complete : false},
  {text: '호로롤', complete : true}
]

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
    return [...state, {text: action.text, complete : false}];
  case COMPLETE_TODO:
    return [
      ...state.slice(0, action.index),
      {...state[action.index], complete : true},
      ...state.slice(action.index + 1)
    ];
  default:
    return state;
  }
}

const search = (state='', action) => {
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
  search
});

export default todoReducer;
