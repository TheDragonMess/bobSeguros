// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Hooks
import useClickOutside from "../hooks/useClickOutside";

// Utils
import classnames from "../../../utils/classnames";

function Options({
  value,
  options,
  listRef,
  customRef,
  elementRef,
  hideOptions,
  selectBtnRef,
  handleOnChange,
}) {
  // Hide options when click is outside list options
  useClickOutside({
    callback: hideOptions,
    customRef: customRef,
    selectRef: elementRef,
    selectBtnRef: selectBtnRef,
  });

  return (
    <div
      className={classnames([
        "select-options w-100 mb-1",
        options?.length > 5 ? "has-scrollbar" : null,
      ])}
    >
      <ul
        ref={listRef}
        className="list-unstyled mb-0 user-select-none options-wrapper"
      >
        {options.map((option, i) => (
          <li
            key={option.value ?? String(i)}
            role="button"
            value={option.value}
            onClick={(e) => handleOnChange(option, e)}
            className={classnames([
              "py-2 px-3 option-item fw-semibold",
              value === option.value ? "active" : null,
              value !== option.value && option.disabled ? "disabled" : null,
            ])}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

Options.propTypes = {
  listRef: PropTypes.object,
  customRef: PropTypes.object,
  hideOptions: PropTypes.func.isRequired,
  elementRef: PropTypes.object.isRequired,
  selectBtnRef: PropTypes.object.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
};

export default memo(Options, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.options === nextProps.options
  );
});
