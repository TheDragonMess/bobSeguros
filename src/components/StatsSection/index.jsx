// Librarys
import PropTypes from "prop-types";

// Components
import FAQs from "./FAQs";
import Stats from "./Stats";
import Header from "./Header";
import StatsModal from "./Modal";
import OutcomeStats from "./OutcomeStats";

// Hooks
import useStatsSection from "./useStatsSection";

export default function StatsSection(props) {
  const {
    faqs,
    stats,
    outcomeStats,
    statsModal,

    hasFaqs,
    hasStats,
    hasOutcomeStats,
  } = useStatsSection(props);

  return (
    <div className="position-relative">
      <h5 className="section-name stats-section-name">RENDIMIENTO</h5>

      <div className="float-skyblue-box h-100 position-absolute" />

      <section className="stats-section d-flex flex-column">
        <Header hasStats={hasStats} onClickBar={statsModal.show} />
        <Stats stats={stats} hasStats={hasStats} />

        <OutcomeStats
          outcomeStats={outcomeStats}
          hasOutcomeStats={hasOutcomeStats}
        />

        <FAQs faqs={faqs} hasFaqs={hasFaqs} />

        {statsModal.isShowing && (
          <StatsModal
            isShowing
            faqs={faqs}
            stats={stats}
            hasFaqs={hasFaqs}
            hasStats={hasStats}
            onHide={statsModal.hide}
            outcomeStats={outcomeStats}
            hasOutcomeStats={hasOutcomeStats}
          />
        )}
      </section>
    </div>
  );
}

StatsSection.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object),
  stats: PropTypes.arrayOf(PropTypes.object),
  outcomeStats: PropTypes.arrayOf(PropTypes.object),
};
