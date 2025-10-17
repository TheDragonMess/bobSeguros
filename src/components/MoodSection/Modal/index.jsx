// Librarys
import PropTypes from "prop-types";

// Components
import MoodBars from "../MoodBars";
import Modal from "components/Modal";

export default function MoodModal({ moods, ...props }) {
  return (
    <Modal {...props} className="mood-modal">
      <h6 className="modal-title">Mood & Sentiment</h6>
      <div className="title-separator"></div>
      <MoodBars moods={moods} />
    </Modal>
  );
}

MoodModal.propTypes = {
  isShowing: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  moods: PropTypes.arrayOf(PropTypes.object).isRequired,
};
