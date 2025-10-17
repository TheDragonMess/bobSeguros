/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useEffect, useCallback } from "react";

// Utils
import isFunction from "../../../utils/isFunction";

/**
 * Hook that alerts clicks outside of the passed ref
 * @param {object} params Params
 */
export default function useClickOutside({
  callback,
  customRef,
  selectBtnRef,
  selectRef = {},
} = {}) {
  // Callback that executes when is outside of the ref
  const handleClickElement = useCallback(
    (e) => {
      // Validate callback
      if (!isFunction(callback)) return;

      const compRef = selectRef.current;
      const btnRef = selectBtnRef.current;

      if (
        btnRef !== null &&
        compRef !== null &&
        !btnRef.contains(e.target) &&
        !compRef.contains(e.target)
      ) {
        callback(); // Execute callback
      }
    },
    [callback, selectRef?.current, selectBtnRef?.current]
  );

  useEffect(() => {
    const element = customRef?.current ?? document;

    element?.addEventListener("click", handleClickElement, true);

    return () => {
      element?.removeEventListener("click", handleClickElement, true);
    };
  }, []);
}
