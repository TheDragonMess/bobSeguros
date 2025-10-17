// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Hooks
import useInputText from "./useInputText";

// Utils
import classnames from "../../utils/classnames";
import isValidString from "../../utils/isValidString";

function InputText({
  value,
  error,
  style,
  onBlur,
  onFocus,
  onChange,
  disabled,
  readOnly,
  className,
  textLabel,
  autoFocus,
  onKeyDown,
  onPressEsc,
  placeholder,
  onPressEnter,
  containerStyle,
  containerClassName,
  customInput = {},
  type = "text",
}) {
  const {
    handleBlur,
    handleFocus,
    handleChange,
    handleKeyDown,
    numberInputOnWheelPreventChange,
  } = useInputText({
    error: error,
    onBlur: onBlur,
    onFocus: onFocus,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onPressEsc: onPressEsc,
    onPressEnter: onPressEnter,
    customInput: customInput,
  });

  return (
    <div
      style={containerStyle}
      className={classnames([containerClassName, "form-control-container"])}
    >
      {isValidString(textLabel) && (
        <label className="input-label mb-1">{textLabel}</label>
      )}

      <input
        value={value}
        {...customInput}
        type={type}
        style={style}
        onBlur={handleBlur}
        readOnly={readOnly}
        disabled={disabled}
        autoFocus={autoFocus}
        onFocus={handleFocus}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        autoComplete="new-password"
        onClick={(e) => e.stopPropagation()}
        onWheel={numberInputOnWheelPreventChange}
        className={classnames([
          className,
          "form-control",
          isValidString(error) ? "input-has-error" : null,
        ])}
      />
    </div>
  );
}

InputText.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.string,
  textLabel: PropTypes.string,
  className: PropTypes.string,
  customInput: PropTypes.object,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default memo(InputText, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.error === nextProps.error &&
    prevProps.style === nextProps.style &&
    prevProps.onBlur === nextProps.onBlur &&
    prevProps.onFocus === nextProps.onFocus &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.textLabel === nextProps.textLabel &&
    prevProps.className === nextProps.className &&
    prevProps.onKeyDown === nextProps.onKeyDown &&
    prevProps.onPressEsc === nextProps.onPressEsc &&
    prevProps.placeholder === nextProps.placeholder &&
    prevProps.customInput === nextProps.customInput &&
    prevProps.onPressEnter === nextProps.onPressEnter
  );
});
