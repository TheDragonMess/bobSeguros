import useFetchApi from "../useFetchApi";

/**
 * Get metrics for the dashboard.
 * - Reads API base URL and token from window.__APP_CONFIG__ (via /config.js).
 * - Polls every 10s by default.
 * - transformData (inside useFetchApi) already merges with initialData, so no extra fallback here.
 *
 * @param {string} accountId - (reserved for future use)
 * @param {object} options
 * @param {string} [options.endpoint="chat/analytics"] - Endpoint path (joined to API_URL).
 * @param {number} [options.refreshMs=10000] - Polling interval in ms (0 disables).
 * @param {string} [options.tokenOverride] - Optional bearer token to override runtime token.
 */
export default function useGetMetrics(
  accountId,
  { endpoint = "chat/analytics", refreshMs = 10_000, tokenOverride } = {}
) {
  const {
    metrics1, // transformed API data (already merged with initialData in transformData)
    isLoading1, // loading state for current fetch
    error, // error string (if any)
    refetch, // manual refetch()
    sentiments // fluctuated moods array from useFetchApi
  } = useFetchApi(endpoint, tokenOverride, refreshMs);

  return {
    metrics: metrics1,
    isLoading: isLoading1,
    error,
    refetch,
    sentiments
  };
}
