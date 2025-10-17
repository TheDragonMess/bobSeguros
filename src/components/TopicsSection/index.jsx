// Librarys
import PropTypes from "prop-types";

// Components
import Topics from "./Topics";
import TopicsModal from "./Modal";

// Hooks
import useShowModal from "hooks/useShowModal";

// Constants
import { EMPTY_TOPICS, EMPTY_ACTIONS } from "./constants";

export default function TopicsSection({ topics, actions }) {
  const topicsModal = useShowModal();
  const actionsModal = useShowModal();

  return (
    <section className="topics-section h-100 d-flex justify-content-between position-relative">
      <Topics
        title="Acciones"
        topics={actions}
        emptyMessage={EMPTY_ACTIONS}
        onClickBar={actionsModal.show}
      />

      <div className="separator position-absolute" />

      <Topics
        title="Temas"
        topics={topics}
        emptyMessage={EMPTY_TOPICS}
        onClickBar={topicsModal.show}
      />

      {actionsModal.isShowing && (
        <TopicsModal
          isShowing
          topics={topics}
          onHide={actionsModal.hide}
          emptyMessage={EMPTY_ACTIONS}
          modalTitle="Acciones"
        />
      )}

      {topicsModal.isShowing && (
        <TopicsModal
          isShowing
          topics={topics}
          onHide={topicsModal.hide}
          emptyMessage={EMPTY_TOPICS}
          modalTitle="Temas"
        />
      )}
    </section>
  );
}

TopicsSection.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
