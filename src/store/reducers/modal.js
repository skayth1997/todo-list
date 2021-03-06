import { INITIAL_STATE } from "../../consts/modal";
import { SHOW_MODAL, HIDE_MODAL } from '../../consts/action-types';

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        name: action.payload.name,
        props: action.payload.props,
      };
    case HIDE_MODAL:
      return INITIAL_STATE;
    default:
      return state
  }
};

export default modalReducer;
