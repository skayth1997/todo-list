import { connect } from "react-redux";
import { hideModal } from "../../../store/actions/modal";
import { deleteTodo } from "../../../store/actions/todo";

const DeleteTodoModal = ({ hideModal, deleteTodo, todo }) => {
  const handleHideModal = () => {
    hideModal();
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo._id);
    hideModal();
  };

  return (
    <div className="default-modal-wrapper" onClick={handleHideModal}>
      <div className="default-modal delete-todo-modal" onClick={e => e.stopPropagation()}>
        <div onClick={handleHideModal} className="modal-close float-right cursor-pointer mr-2">&times;</div>

        <div className="mt-5 justify-content-center px-5">
          <p className="text-center">Are you sure you want to delete?</p>

          <div className="d-flex justify-content-around px-5">
            <button className="btn btn-danger w-25" onClick={handleDeleteTodo}>Yes</button>
            <button className="btn btn-success w-25" onClick={handleHideModal}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  hideModal: (modal) => dispatch(hideModal(modal)),
});

export default connect(null, mapDispatchToProps)(DeleteTodoModal);