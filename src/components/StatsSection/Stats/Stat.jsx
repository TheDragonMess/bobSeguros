// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import isValidString from "utils/isValidString";

function Stat({ stat, isShowingLine }) {
  // Get stat label
  const label = stat?.label;

  // Get stat AI label
  const aiLabel = stat?.ai;

  // Get stat user label
  const userLabel = stat?.user;

  // Check if has label
  const hasLabel = isValidString(label);

  // Check if has AI label
  const hasAILabel = isValidString(aiLabel);

  // Check if has user label
  const hasUserLabel = isValidString(userLabel);

  return (
    <li className="stat-item">
      <div className="wrapper d-flex align-items-center">
        <div className="stat-label-box">
          <span className="stat-label">{hasLabel ? label : "Desconocido"}</span>
        </div>

        <div className="box d-flex align-items-center">
          <div className="user-box ps-3 pe-1 d-flex align-items-center justify-content-center">
            <span className="user-label">{hasUserLabel ? userLabel : "-"}</span>
          </div>

          <div className="ai-box px-3 d-flex align-items-center justify-content-center">
            <span className="ai-label">{hasAILabel ? aiLabel : "-"}</span>
          </div>
        </div>
      </div>

      {isShowingLine && <div className="separator w-100" />}
    </li>
  );
}

Stat.propTypes = {
  stat: PropTypes.object.isRequired,
  isShowingLine: PropTypes.bool.isRequired,
};

export default memo(Stat);
