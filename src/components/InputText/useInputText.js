// Hooks
import { useState, useCallback } from "react";

// Utils
import isString from "../../utils/isString";
import isFunction from "../../utils/isFunction";

/**
 * Callback for implements the logic of the InputText component
 * @param {object} params Params
 */
export default function useInputText({
  error,
  onBlur,
  onFocus,
  onChange,
  onKeyDown,
  onPressEsc,
  onPressEnter,
  customInput,
}) {
  const [hasMountedError, setHasMountedError] = useState(isString(error));

  // Focus event of the input element
  const handleFocus = useCallback(
    (e) => {
      // Validate 'onFocus' callback
      if (isFunction(onFocus)) onFocus(e);

      // Validate 'onFocus' callback from 'customInput'
      if (!isFunction(customInput?.onFocus)) return;
      customInput.onFocus(e);
    },
    [onFocus, customInput?.onFocus]
  );

  // Change event of the input element
  const handleChange = useCallback(
    (e) => {
      // Validate 'onChange' callback
      if (isFunction(onChange)) onChange(e);

      // Validate 'onChange' callback from 'customInput'
      if (!isFunction(customInput?.onChange)) return;
      customInput.onChange(e);
    },
    [onChange, customInput?.onChange]
  );

  // Blur event of the input element
  const handleBlur = useCallback(
    (e) => {
      // Validate 'onBlur' callback
      if (isFunction(onBlur)) onBlur(e);

      // Validate 'onBlur' callback from 'customInput'
      if (isFunction(customInput?.onBlur)) {
        customInput.onBlur(e);
      }

      if (!hasMountedError) return;
      setHasMountedError(false);
    },
    [onBlur, hasMountedError, customInput?.onBlur]
  );

  // Key down event of the input element
  const handleKeyDown = useCallback(
    (e) => {
      if (isFunction(onKeyDown)) onKeyDown(e);

      // Validate 'Esc' key pressed
      if (e.key === "Escape") {
        if (isFunction(onPressEsc)) onPressEsc(e);
      }

      if (e.key !== "Enter") return; // Validate non enter key pressed
      if (isFunction(onPressEnter)) onPressEnter(e);
    },
    [onKeyDown, onPressEsc, onPressEnter]
  );

  // Callback for prevent change of input number on wheel
  const numberInputOnWheelPreventChange = useCallback((e) => {
    // Validate non number
    if (e.target.type !== "number") return;

    e.target.blur(); // Prevent the input value change
    e.stopPropagation(); // Prevent the page/container scrolling
  }, []);

  return {
    handleBlur: handleBlur,
    handleFocus: handleFocus,
    handleChange: handleChange,
    handleKeyDown: handleKeyDown,
    numberInputOnWheelPreventChange: numberInputOnWheelPreventChange,
  };
}
