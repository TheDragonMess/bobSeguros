// Librarys
import PropTypes from "prop-types";

// Components
import FAQs from "../FAQs";
import Stats from "../Stats";
import OutcomeStats from "../OutcomeStats";
import StatsHeaderIcons from "../Header/Icons";
import Modal from "components/Modal";

// Hooks
import useModal from "./useModal";
import classnames from "utils/classnames";

export default function StatsModal({
  faqs,
  stats,
  outcomeStats,
  hasFaqs,
  hasStats,
  hasOutcomeStats,
  ...props
}) {
  const { hasScrollbar, scrollbarRef } = useModal({
    faqs: faqs,
    stats: stats,
    outcomeStats: outcomeStats,
  });

  return (
    <Modal
      {...props}
      className={classnames([
        "stats-modal",
        hasScrollbar ? "with-scrollbar" : null,
      ])}
    >
      <div className="title-box d-flex align-items-end justify-content-between">
        <h6 className="modal-title">Stats</h6>
        <StatsHeaderIcons />
      </div>

      <div className="title-separator-box pt-1">
        <div className="title-separator"></div>
      </div>

      <div ref={scrollbarRef} className="scrollbar-box h-100">
        <div className="position-relative">
          <div className="float-skyblue-box position-absolute"></div>

          <Stats stats={stats} hasStats={hasStats} />

          <OutcomeStats
            outcomeStats={outcomeStats}
            hasOutcomeStats={hasOutcomeStats}
          />

          <FAQs faqs={faqs} hasFaqs={hasFaqs} />
        </div>
      </div>
    </Modal>
  );
}

StatsModal.propTypes = {
  hasFaqs: PropTypes.bool,
  hasStats: PropTypes.bool,
  isShowing: PropTypes.bool,
  hasOutcomeStats: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  faqs: PropTypes.arrayOf(PropTypes.object).isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  outcomeStats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
