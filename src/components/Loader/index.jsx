// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import classnames from "utils/classnames";

export const DEFAULT_TITLE = "Loading data...";

function LoaderData({ title = DEFAULT_TITLE, className }) {
  return (
    <section
      className={classnames([
        className,
        "loading-data w-100 position-relative d-flex align-items-center justify-content-center flex-column"
      ])}
    >
      <div className="custom-loader"></div>
      <h5 className="mb-0 text">{title}</h5>
    </section>
  );
}

LoaderData.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};

export default memo(LoaderData);
