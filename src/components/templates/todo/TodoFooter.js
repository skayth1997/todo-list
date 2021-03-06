import { connect } from "react-redux";
import { clearCompletedTodos } from "../../../store/actions/todo";
import { selectTodos } from "../../../store/selectors/todo";

const TodoFooter = ({ todos, clearCompletedTodos }) => {
  if (!todos.length) {
    return null;
  }

  return (
    <button
      onClick={clearCompletedTodos}
      className="btn btn-primary btn-sm mt-2">
      Clear completed tasks
    </button>
  );
};

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearCompletedTodos: () => dispatch(clearCompletedTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter);
