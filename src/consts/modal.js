import EditTodoModal from "../components/modals/todo/EditTodoModal";
import DeleteTodoModal from "../components/modals/todo/DeleteTodoModal";
import CreateTodoModal from "../components/modals/todo/CreateTodoModal";

const INITIAL_STATE = {
  name: null,
  props: {},
};

const MODAL_COMPONENTS = {
  editTodo: EditTodoModal,
  deleteTodo: DeleteTodoModal,
  createTodo: CreateTodoModal,
};

export { INITIAL_STATE, MODAL_COMPONENTS };
