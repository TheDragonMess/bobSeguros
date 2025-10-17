// Librarys
import PropTypes from "prop-types";

// Components
import Modal from "components/Modal";
import ChannelsPercentages from "components/UserMetricsSection/Channels/Percentages";

export default function ChannelsModal({ onHide, isShowing, ...props }) {
  return (
    <Modal onHide={onHide} isShowing={isShowing} className="channels-modal">
      <h6 className="modal-title">Canales</h6>
      <div className="title-separator"></div>

      <ChannelsPercentages {...props} />
    </Modal>
  );
}

ChannelsModal.propTypes = {
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  web: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  whatsapp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  appMobile: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
