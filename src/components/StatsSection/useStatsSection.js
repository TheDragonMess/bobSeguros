// Hooks
import useShowModal from "hooks/useShowModal";

// Utils
import isValidArray from "utils/isValidArray";

/**
 * Hook for implements logic StatsSection component
 * @param {object} params Params
 */
export default function useStatsSection(props) {
  const statsModal = useShowModal();

  // Check if has faqs
  const hasFaqs = isValidArray(props.faqs);

  // Check if has stats
  const hasStats = isValidArray(props.stats);

  // Check if has outcome stats
  const hasOutcomeStats = isValidArray(props.outcomeStats);

  return {
    ...props,
    hasFaqs: hasFaqs,
    hasStats: hasStats,
    hasOutcomeStats: hasOutcomeStats,
    statsModal: statsModal,
  };
}
