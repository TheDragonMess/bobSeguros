// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Loader from "./Loader";

// Utils
import classnames from "utils/classnames";
import isValidString from "utils/isValidString";

function Button({
  icon,
  title,
  isLoading,
  titlePopup,
  buttonTitleClassName,
  ...props
}) {
  return (
    <button
      type="button"
      {...props}
      title={titlePopup ?? title}
      disabled={isLoading || props.disabled}
    >
      {isLoading && <Loader />}
      {!isLoading && icon}

      {!isLoading && isValidString(title) && (
        <span className={classnames(["button-title", buttonTitleClassName])}>
          {title}
        </span>
      )}
    </button>
  );
}

Button.displayName = "Button";

Button.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  titlePopup: PropTypes.string,
  buttonTitleClassName: PropTypes.string,
};

export default memo(Button, (prevProps, nextProps) => {
  return (
    prevProps.icon === nextProps.icon &&
    prevProps.title === nextProps.title &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.isLoading === nextProps.isLoading &&
    prevProps.className === nextProps.className
  );
});
