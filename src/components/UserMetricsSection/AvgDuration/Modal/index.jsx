// Librarys
import PropTypes from "prop-types";

// Components
import Modal from "components/Modal";
import Duration from "components/UserMetricsSection/AvgDuration/Duration";

export default function AvgDurationModal({ status, duration, ...props }) {
  return (
    <Modal {...props} className="avg-duration-modal">
      <h6 className="modal-title">Tiempo promedio</h6>
      <div className="title-separator"></div>
      <Duration status={status} duration={duration} />
    </Modal>
  );
}

AvgDurationModal.propTypes = {
  status: PropTypes.string,
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
