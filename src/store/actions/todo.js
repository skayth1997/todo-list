import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODOS } from "../../consts/action-types";
import todoApi from '../../api/todo';

const fetchTodos = () => {
  return async (dispatch) => {
    const todos = await todoApi.fetchAll();

    dispatch({ type: FETCH_TODOS, payload: { todos } });
  };
};

const createTodo = (todo) => {
  return (dispatch) => {
    todoApi.createTodo(todo).then(r => r);

    dispatch({
      type: CREATE_TODO,
      payload: { ...todo, completed: false, _id: Date.now() },
    });
  };
};

const updateTodo = (todo) => {
  return (dispatch) => {
    todoApi.updateTodo(todo).then(r => r);

    dispatch({
      type: UPDATE_TODO,
      payload: todo,
    });
  };
};

const clearCompletedTodos = () => {
  return async (dispatch, getState) => {
    const completedTodos = getState().todos.filter(todo => todo.completed);

    completedTodos.forEach((todo) => {
      dispatch(deleteTodo(todo._id));
    });
  };
};

const deleteTodo = (id) => {
  return (dispatch) => {
    todoApi.deleteTodo(id).then(r => r);

    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };
};

export {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  clearCompletedTodos,
};
