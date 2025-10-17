// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import NumericValues from "./NumericValues";

// Utils
import isValidString from "utils/isValidString";

// Constants
import icons from "./icons";

function OutcomeStat({ outcomeStat, isShowingLine }) {
  // Get outcome stat slug
  const slug = outcomeStat?.slug;

  // Get outcome stat label
  const label = outcomeStat?.label;

  // Check if has slug
  const hasSlug = isValidString(slug);

  // Check if has label
  const hasLabel = isValidString(label);

  return (
    <li className="outcome-stat-item">
      <div className="wrapper d-flex align-items-center">
        <aside className="outcome-stat-label-box d-flex align-items-center">
          {icons[hasSlug ? slug : ""]}

          <span className="outcome-stat-label">
            {hasLabel ? label : "Desconocido"}
          </span>
        </aside>

        <aside className="box d-flex align-items-center">
          <NumericValues
            total={outcomeStat?.user?.total}
            percentage={outcomeStat?.user?.percentage}
          />

          <NumericValues
            total={outcomeStat?.ai?.total}
            percentage={outcomeStat?.ai?.percentage}
          />
        </aside>
      </div>

      {isShowingLine && <div className="separator w-100" />}
    </li>
  );
}

OutcomeStat.propTypes = {
  outcomeStat: PropTypes.object.isRequired,
  isShowingLine: PropTypes.bool.isRequired,
};

export default memo(OutcomeStat);
