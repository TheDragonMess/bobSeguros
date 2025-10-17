// Hooks
import { useState, useCallback } from "react";

/**
 * Hook for implement logic showing the modal
 */
export default function useShowModal() {
  const [isShowingModal, setShowingModal] = useState(false);

  // Show modal
  const showJobForm = useCallback(() => {
    if (isShowingModal) return;
    setShowingModal(true);
  }, [isShowingModal]);

  // Hide modal
  const hideJobForm = useCallback(() => {
    if (!isShowingModal) return;
    setShowingModal(false);
  }, [isShowingModal]);

  return {
    show: showJobForm,
    hide: hideJobForm,
    isShowing: isShowingModal,
  };
}
