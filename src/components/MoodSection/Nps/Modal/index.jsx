// Librarys
import PropTypes from "prop-types";

// Components
import Modal from "components/Modal";

export default function NpsModal({ nps, ...props }) {
  return (
    <Modal {...props} className="nps-modal">
      <h6 className="modal-title">NPS</h6>
      <div className="title-separator"></div>
      <h5 className="nps fw-bold mb-0">{nps}</h5>
    </Modal>
  );
}

NpsModal.propTypes = {
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  nps: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
