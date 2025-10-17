// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import StatsHeaderIcons from "./Icons";
import SectionTitle from "components/SectionTitle";

function StatsHeader({ hasStats, onClickBar }) {
  return (
    <div className="stats-header d-flex align-items-center">
      <SectionTitle title="Stats" onClickBar={onClickBar} />
      {hasStats && <StatsHeaderIcons />}
    </div>
  );
}

StatsHeader.propTypes = {
  hasStats: PropTypes.bool,
  onClickBar: PropTypes.func,
};

export default memo(StatsHeader);
