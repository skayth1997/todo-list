import { useState } from "react";
import { connect } from "react-redux";
import { hideModal } from "../../../store/actions/modal";
import { isValidForm, validateForm } from "./validation";
import ColorPicker from "../../modules/ColorPicker";
import validation from "../../../consts/validations/todo";
import { updateTodo } from "../../../store/actions/todo";
import { cloneDeep } from "lodash";

const EditTodoModal = ({ hideModal, todo, updateTodo }) => {
  const [form, setForm] = useState(todo);
  const [formValidation, setFormValidation] = useState(cloneDeep(validation));

  const handleHideModal = () => {
    setFormValidation(cloneDeep(validation));
    hideModal();
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleColorChange = (color) => {
    setForm({ ...form, color: color.hex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormValidation(validateForm({ ...formValidation }, form));

    if (isValidForm(formValidation)) {
      updateTodo({ ...form });
      setFormValidation(cloneDeep(validation));
      hideModal();
    }
  };

  return (
    <div className="default-modal-wrapper" onClick={handleHideModal}>
      <div className="default-modal edit-todo-modal" onClick={(e) => e.stopPropagation()}>
        <div onClick={handleHideModal} className="modal-close float-right cursor-pointer mr-2">&times;</div>

        <div className="p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="d-block">
                Title
                <input
                  type="text"
                  name="title"
                  className={`form-control resize-none ${formValidation.title.valid ? '' : 'is-invalid'}`}
                  value={form.title}
                  onChange={handleInputChange}/>
              </label>
            </div>
            <label className="d-block">
              Color
              <ColorPicker defaultColor={form.color} handleChangeCallback={handleColorChange}/>
            </label>
            <div className="form-group">
              <label className="d-block">
                Description
                <textarea
                  name="description"
                  className={`form-control ${formValidation.description.valid ? '' : 'is-invalid'}`}
                  value={form.description}
                  onChange={handleInputChange}
                  rows="3"
                />
              </label>
            </div>
            <button className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  hideModal: (modal) => dispatch(hideModal(modal)),
});

export default connect(null, mapDispatchToProps)(EditTodoModal);
