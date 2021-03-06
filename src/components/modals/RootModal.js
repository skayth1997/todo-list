import { connect } from "react-redux";
import { MODAL_COMPONENTS } from "../../consts/modal";
import { selectModal } from "../../store/selectors/modal";

const RootModal = ({ modal }) => {
  if (!modal.name) {
    return null;
  }

  const Modal = MODAL_COMPONENTS[modal.name];

  return <Modal {...modal.props} />;
}

const mapStateToProps = (state) => ({
  modal: selectModal(state),
});

export default connect(mapStateToProps, null)(RootModal);
