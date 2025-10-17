// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import isNumber from "utils/isNumber";

function NumericValues({ total, percentage }) {
  // Check if has total
  const hasTotal = isNumber(total);

  // Check if has percentage
  const hasPercentage = isNumber(percentage);

  return (
    <div className="numeric-values-box px-2 d-flex align-items-center justify-content-center">
      <span className="total">{hasTotal ? total : "0"}</span>
      <div className="separator" />

      <span className="percentage">{hasPercentage ? percentage : "0"}%</span>
    </div>
  );
}

NumericValues.propTypes = {
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default memo(NumericValues);
