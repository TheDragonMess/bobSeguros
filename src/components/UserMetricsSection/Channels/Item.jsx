// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

function ChannelsItem({ label, percentage }) {
  return (
    <article className="channels-item d-flex flex-column">
      <span className="label fw-medium">{label}</span>

      <span className="percentage fw-light">{percentage ?? 0}</span>
    </article>
  );
}

ChannelsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default memo(ChannelsItem);
