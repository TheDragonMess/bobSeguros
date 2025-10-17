// Librarys
import PropTypes from "prop-types";

// Components
import Modal from "components/Modal";
import TopicList from "../Topics/List";

export default function TopicsModal({
  topics,
  modalTitle,
  emptyMessage,
  ...props
}) {
  return (
    <Modal {...props} className="topics-modal">
      <h6 className="modal-title">{modalTitle}</h6>
      <div className="title-separator"></div>

      <div className="topics-box w-100">
        <TopicList topics={topics} emptyMessage={emptyMessage} />
      </div>
    </Modal>
  );
}

TopicsModal.propTypes = {
  isShowing: PropTypes.bool,
  modalTitle: PropTypes.string,
  emptyMessage: PropTypes.string,
  onHide: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf([PropTypes.object]).isRequired,
};
