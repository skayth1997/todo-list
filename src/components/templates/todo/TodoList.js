import { useState } from "react";
import { connect } from "react-redux";
import { selectTodos } from "../../../store/selectors/todo";
import List from "../../elements/list";
import { default as ListItem } from "../../elements/list/Item";
import Checkbox from "../../elements/form/Checkbox";
import ToggleButton from "../../elements/ToggleButton";
import { updateTodo } from "../../../store/actions/todo";
import SvgEdit from "../../icons/SvgEdit";
import SvgDelete from "../../icons/SvgDelete";
import { showModal } from "../../../store/actions/modal";

const TodoList = ({ todos, updateTodo, showModal }) => {
  const [visitedTodoIds, setVisitedTodoIds] = useState([]);

  const handleUpdateTodo = (e, todo) => {
    updateTodo({ ...todo, completed: e.target.checked });
  };

  const handleToggleTodo = (id) => {
    const index = visitedTodoIds.indexOf(id);

    if (index !== -1) {
      setVisitedTodoIds([
        ...visitedTodoIds.slice(0, index),
        ...visitedTodoIds.slice(index, visitedTodoIds.length - 1)
      ]);
    } else {
      setVisitedTodoIds([...visitedTodoIds, id]);
    }
  };

  const handleShowModal = (modal) => {
    showModal(modal);
  };

  return (
    <List className="list-group no-select">
      {todos.map((todo) => (
        <ListItem key={todo._id}>
          <Checkbox value={todo.completed} onChange={(e) => handleUpdateTodo(e, todo)}/>
          <div className="d-inline-block mx-3">{todo.title}</div>
          <div className="color-picker-box-wrapper todo-color">
            <div className="color-picker-box" style={{ background: todo.color }}/>
          </div>
          <div className="float-right">
            <SvgEdit
              className="mr-3 todo-edit-icon"
              onClick={() => handleShowModal({ name: 'editTodo', props: { todo } })}
            />
            <SvgDelete
              className="mr-3 todo-delete-icon"
              onClick={() => handleShowModal({ name: 'deleteTodo', props: { todo } })}
            />
            <ToggleButton
              onChangeCallback={() => handleToggleTodo(todo._id)}
              className="cursor-pointer d-inline-block todo-toggle-button"
            />
          </div>
          {visitedTodoIds.includes(todo._id) && <div className="px-3 pt-2">
            <small>{todo.description}</small>
          </div>}
        </ListItem>
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  showModal: (modal) => dispatch(showModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
