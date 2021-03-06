import { HIDE_MODAL, SHOW_MODAL } from "../../consts/action-types";

const showModal = (modal = {}) => ({
  type: SHOW_MODAL,
  payload: {
    name: modal.name,
    props: modal.props,
  },
});

const hideModal = (modal = {}) => ({
  type: HIDE_MODAL,
});

export { showModal, hideModal };
