// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import isNumber from "utils/isNumber";
import classnames from "utils/classnames";
import capitalize from "utils/capitalize";
import isValidString from "utils/isValidString";

function MoodBar({ mood, isLastItem }) {
  // Get mood label
  const label = mood?.label;

  // Get mood percentage
  const percentage = Number(mood?.percentage);

  // Check if has label
  const hasLabel = isValidString(label);

  // Check if has percentage
  const hasPercentage = isNumber(percentage) && !Number.isNaN(percentage);

  // Define percentage adjust
  const adjust = percentage < 4 ? 4 : 2;

  return (
    <li className="mood-bar position-relative d-flex align-items-end justify-content-center">
      <div className="mood-box d-flex flex-column">
        <span className="mood-percentage text-center fw-semibold">
          {hasPercentage ? percentage : "-"} %
        </span>

        <div className="bar-box d-flex flex-column align-items-center justify-content-center">
          <div
            className={classnames(["circle", mood?.exceeded ? "active" : ""])}
          />

          <div
            className="bar"
            style={{
              height: `${percentage * adjust}px`,
              minHeight: `${percentage * adjust}px`,
            }}
          />
        </div>

        <span className="mood-label text-center fw-light">
          {hasLabel ? capitalize(label) : "Desconocido"}
        </span>
      </div>

      {!isLastItem && <div className="separator position-absolute" />}
    </li>
  );
}

MoodBar.propTypes = {
  mood: PropTypes.object.isRequired,
  isLastItem: PropTypes.bool.isRequired,
};

export default memo(MoodBar);
