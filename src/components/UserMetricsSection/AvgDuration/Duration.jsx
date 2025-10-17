// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import ArrowUpIcon from "components/icons/arrow-up-icon";
import ArrowDownIcon from "components/icons/arrow-down-icon";

// Utils
import isValidString from "utils/isValidString";

function Duration({ status, duration }) {
  // Validate 'duration' prop
  const hasDuration = isValidString(duration);

  // Define avg duration
  const avgDuration = hasDuration ? duration : "0 min";

  return (
    <div className="box d-flex align-items-center mb-2">
      <h5 className="avg-duration mb-0">{avgDuration}</h5>
      {status === "high" ? <ArrowUpIcon /> : <ArrowDownIcon />}
    </div>
  );
}

Duration.propTypes = {
  status: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(Duration);
