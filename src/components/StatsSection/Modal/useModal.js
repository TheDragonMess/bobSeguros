// Hooks
import { useRef, useEffect } from "react";
import useCheckScrollbar from "hooks/useCheckScrollbar";

/**
 * Hook for implements logic StatsSectionModal component
 * @param {object} params Params
 */
export default function useModal({ faqs, stats, outcomeStats }) {
  const scrollbarRef = useRef(null);

  const { hasScrollbar, updateScrollbarFlag } = useCheckScrollbar({
    elementRef: scrollbarRef,
  });

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      updateScrollbarFlag();
    }

    return () => {
      mounted = false;
    };
  }, [faqs, stats, outcomeStats]);

  return {
    hasScrollbar: hasScrollbar,
    scrollbarRef: scrollbarRef,
  };
}
