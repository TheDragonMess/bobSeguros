// Librarys
import PropTypes from "prop-types";

// Utils
import classnames from "../../utils/classnames"

export default function LoadingSelect({ className }) {
  return (
    <div
      className={classnames([
        className,
        "select-loader skeleton-animation",
      ])}
    ></div>
  );
}

LoadingSelect.propTypes = {
  className: PropTypes.string,
};
