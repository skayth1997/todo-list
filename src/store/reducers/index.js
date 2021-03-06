import { combineReducers } from "redux";
import todoReducer from "./todo";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
});

export default rootReducer;
