// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import isValidString from "utils/isValidString";

function SectionTitle({ title, onClickBar }) {
  // Validate 'title' prop
  if (!isValidString(title)) return null;

  return (
    <div className="section-title d-flex align-items-center">
      <div role="button" className="bar" onClick={onClickBar}></div>
      <h6 className="title fw-bold mb-0">{title}</h6>
    </div>
  );
}

SectionTitle.propTypes = {
  onClickBar: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default memo(SectionTitle);
