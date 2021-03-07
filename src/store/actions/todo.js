import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  FETCH_TODOS,
} from "../../consts/action-types";
import todoApi from '../../api/todo';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(showLoading());

    const todos = await todoApi.fetchAll();

    dispatch({ type: FETCH_TODOS, payload: { todos } });

    dispatch(hideLoading());
  };
};

const createTodo = (todo) => {
  return async (dispatch) => {
    dispatch(showLoading());

    const data = await todoApi.createTodo(todo);

    dispatch({
      type: CREATE_TODO,
      payload: { ...data, completed: false },
    });

    dispatch(hideLoading());
  };
};

const updateTodo = (todo) => {
  return async (dispatch) => {
    dispatch(showLoading());

    const data = await todoApi.updateTodo(todo);

    dispatch({
      type: UPDATE_TODO,
      payload: { ...data, completed: todo.completed },
    });

    dispatch(hideLoading());
  };
};

const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch(showLoading());

    dispatch({
      type: DELETE_TODO,
      payload: id,
    });

    await todoApi.deleteTodo(id);

    dispatch(hideLoading());
  };
};

const completeTodo = (todo) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: { ...todo, completed: true },
    });
  };
};

const incompleteTodo = (todo) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      payload: { ...todo, completed: false },
    });
  };
};

const clearCompletedTodos = () => {
  return (dispatch, getState) => {
    const completedTodos = getState().todos.filter(todo => todo.completed);

    completedTodos.forEach((todo) => {
      dispatch(deleteTodo(todo._id));
    });
  };
};

export {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  incompleteTodo,
  clearCompletedTodos,
};
