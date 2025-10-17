/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useCallback, useLayoutEffect } from "react";

// Utils
import isFunction from "../../../utils/isFunction";

// Constants
import { MAIN_SELECTOR, ACTIVE_OPTION_SELECTOR } from "../constants";

/**
 * Hook that implements the logic when the Select component is mounted
 * @param {object} props Select props
 */
export default function useMountedSelect({
  value,
  setValue,
  selectRef,
  selectedValue,
  isShowingOptions,
  activeAutoScrollbar,
}) {
  // Callback for scroll to active option
  const scrollToSelectedValue = useCallback(() => {
    if (
      selectRef.current === null ||
      !isShowingOptions ||
      !activeAutoScrollbar
    ) {
      return; // Stop function
    }

    const selectContainer = selectRef.current; // Get container

    // Get actived option
    const activedOption = selectContainer.querySelector(ACTIVE_OPTION_SELECTOR);
    if (activedOption === null) return; // Stop function

    // Get actived option
    const selectOptionsTag = selectContainer.querySelector(MAIN_SELECTOR);
    if (selectOptionsTag === null) return;

    const liOffsetTop = activedOption.offsetTop; // Obtiene la distancia desde el li hasta el borde superior del ul
    const divScrollTop = liOffsetTop - selectOptionsTag.clientHeight / 2; // Calcula el scrollTop para que el li esté en la posición 20

    selectOptionsTag.scrollTop = divScrollTop;
  }, [value, isShowingOptions]);

  useLayoutEffect(() => {
    let mounted = true; // Component mounted

    // Update selected value if component is mounted
    if (mounted && value !== selectedValue && isFunction(setValue)) {
      setValue(selectedValue); // Update value
    }

    return () => {
      mounted = false;
    };
  }, [selectedValue]);

  useLayoutEffect(() => {
    let mounted = true; // Component mounted

    if (mounted) {
      scrollToSelectedValue(); // Scroll to active option
    }

    return () => {
      mounted = false;
    };
  }, [value, isShowingOptions]);
}
