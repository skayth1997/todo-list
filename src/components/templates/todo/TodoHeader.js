import SvgTodoList from "../../icons/SvgTodoList";
import { showModal } from "../../../store/actions/modal";
import { connect } from "react-redux";

const TodoHeader = ({ showModal }) => (
  <div className="d-flex align-items-center justify-content-between">
    <h1 className="card-title d-inline-block">
      <span><SvgTodoList/> &nbsp; Todo list</span>
    </h1>
    <button
      className="btn btn-success btn-sm add-todo-button"
      onClick={() => showModal({ name: 'createTodo' })}>
      Add Todo
    </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  showModal: (modal) => dispatch(showModal(modal)),
});

export default connect(null, mapDispatchToProps)(TodoHeader);