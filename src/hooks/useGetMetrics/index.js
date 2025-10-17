// Data
import metrics from "data/metrics.json";
import useFetchApi from "../useFetchApi";
/**
 * Hook for get metrics from New Relic
 * @param {string} accountId Account
 */
export default function useGetMetrics(accountId) {
  const endpoint = "chat/analytics";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJ0ZW5hbnQiOiJhY21lX2NvcnAiLCJqdGkiOiJhMWEyYjRjZC03Mjk5LTRhZjItODAwNC1jZDQ4NWNkYWI1MzkiLCJpYXQiOjE3NTUwNTgxMDh9.sI4fey2uudcsN11dqGOwkVz2rFuFLapgXWFRNvvmRtc";

  // Auto-refresh every 10 seconds
  // const { data, loading } = useFetchApi(endpoint, token, 100000000000000);
  // console.log("fetch", data);

  // const data = {
  //   status: "success",
  //   analytics: {
  //     tenant: "acme_corp",
  //     num_sessions: 1,
  //     unique_users: 1,
  //     num_active_sessions: 0,
  //     chat_average_duration: -43.0,
  //     sessions_by_channel: {
  //       "Web chat": 1
  //     },
  //     sentiments: {
  //       indifferent: 1,
  //       enojado: 3,
  //       instaisfecho: 5,
  //       conforme:7,
  //       Desconforme:3,
  //     },
  //     topics: {
  //       saludo: 1,
  //       presentación: 1
  //     },
  //     trends: {
  //       "Natalia Oreiro": 1,
  //       Hola: 1
  //     },
  //     chat_ended_actions: {
  //       "": 1
  //     },
  //     unanswered_questions: {
  //       "": 1
  //     }
  //   }
  // };

  return {
    metrics: data,
    isLoading: loading
  };
}
