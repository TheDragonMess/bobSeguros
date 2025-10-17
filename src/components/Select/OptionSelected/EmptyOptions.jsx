// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Hooks
import useClickOutside from "../hooks/useClickOutside";

function EmptyOptions({
  customRef,
  elementRef,
  hideOptions,
  selectBtnRef,
  message = "No Options",
}) {
  // Hide options when click is outside list options
  useClickOutside({
    callback: hideOptions,
    customRef: customRef,
    selectRef: elementRef,
    selectBtnRef: selectBtnRef,
  });

  return (
    <div ref={elementRef} className="select-options empty-options w-100 d-flex align-items-center justify-content-center text-center">
      <span className="message">{message}</span>
    </div>
  );
}

EmptyOptions.propTypes = {
  customRef: PropTypes.object,
  hideOptions: PropTypes.func.isRequired,
  elementRef: PropTypes.object.isRequired,
  selectBtnRef: PropTypes.object.isRequired,
};

export default memo(EmptyOptions);
