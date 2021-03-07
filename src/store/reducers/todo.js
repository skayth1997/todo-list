import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  FETCH_TODOS,
} from "../../consts/action-types";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload.todos];
    case CREATE_TODO:
      return [
        ...state,
        action.payload,
      ];
    case UPDATE_TODO:
      return state.map(todo => todo._id === action.payload._id ? action.payload : todo);
    case DELETE_TODO:
      return state.filter(todo => !action.payload.includes(todo._id));
    default:
      return state;
  }
};

export default todoReducer;
