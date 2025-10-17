// Librarys
import PropTypes from "prop-types";

// Components
import OutcomeStat from "./OutcomeStat";

export default function OutcomeStats({ outcomeStats, hasOutcomeStats }) {
  // Validate 'outcomeStats' prop
  if (!hasOutcomeStats) return null;

  return (
    <ul className="outcome-stat-list d-flex flex-column list-unstyled p-0">
      {outcomeStats.map((outcomeStat, i) => (
        <OutcomeStat
          outcomeStat={outcomeStat}
          key={`outcome-stat-${outcomeStat?._id ?? i}`}
          isShowingLine={i !== outcomeStats.length - 1}
        />
      ))}
    </ul>
  );
}

OutcomeStats.propTypes = {
  hasOutcomeStats: PropTypes.bool,
  outcomeStats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
