import { combineReducers } from "redux";
import todoReducer from "./todo";
import modalReducer from "./modal";
import { loadingBarReducer } from 'react-redux-loading-bar';

const rootReducer = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
  loadingBar: loadingBarReducer,
});

export default rootReducer;
