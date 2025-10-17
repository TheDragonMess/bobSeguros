// Librarys
import PropTypes from "prop-types";

// Components
import Modal from "components/Modal";

export default function TotalUsersModal({ total, ...props }) {
  return (
    <Modal {...props} className="total-users-modal">
      <h6 className="modal-title">Usuarios únicos</h6>
      <div className="title-separator"></div>
      <h5 className="total-users fw-bold mb-0">{total}</h5>
    </Modal>
  );
}

TotalUsersModal.propTypes = {
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
