// Hooks
import { useState, useCallback, useEffect } from "react";

/**
 * Hook for check scrollbar
 * @param {object} params Params
 */
export default function useCheckScrollbar({ elementRef }) {
  // Callback for check if the element have scrollbar
  const checkScrollbar = useCallback(() => {
    // Get element
    const element = elementRef?.current;

    // Check if element has scrollbar
    return element?.scrollHeight > element?.clientHeight;
  }, [elementRef]);

  const [hasScrollbar, setHasScrollbar] = useState(checkScrollbar());

  // Callback for update scrollbar flag
  const updateScrollbarFlag = useCallback(() => {
    setHasScrollbar(checkScrollbar());
  }, [checkScrollbar]);

  useEffect(() => {
    window.addEventListener("resize", updateScrollbarFlag);

    return () => {
      window.removeEventListener("resize", updateScrollbarFlag);
    };
  }, [updateScrollbarFlag]);

  return {
    hasScrollbar: hasScrollbar,
    checkScrollbar: checkScrollbar,
    setHasScrollbar: setHasScrollbar,
    updateScrollbarFlag: updateScrollbarFlag,
  };
}
