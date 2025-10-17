// Components
import Loader from "components/Loader";
import Header from "components/Header";

// Containers
import MetricsContainer from "containers/MetricsContainer";

// Hooks
import useGetMetrics from "hooks/useGetMetrics";
import useFetchApi from "hooks/useFetchApi";

const accountId = 6912155;
const endpoint = "chat/analytics";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIiLCJ0ZW5hbnQiOiJhY21lX2NvcnAiLCJqdGkiOiJhMWEyYjRjZC03Mjk5LTRhZjItODAwNC1jZDQ4NWNkYWI1MzkiLCJpYXQiOjE3NTUwNTgxMDh9.sI4fey2uudcsN11dqGOwkVz2rFuFLapgXWFRNvvmRtc";

export default function MainContainer() {
  // const { metrics, isLoading } = useGetMetrics(accountId);
  const { metrics1, sentiments, isLoading1 } = useFetchApi(endpoint, token, 10000);
  // console.log("sent", sentiments);
  // console.log("data.sent", metrics1?.data.moods);
  return (
    <main className="main-container">
      <Header />

      {isLoading1 && <Loader title="Loading metrics...." />}

      {!isLoading1 && (
        <div className="main-box">
          <MetricsContainer metrics={metrics1?.data} moods={sentiments} />
          {/* <MetricsContainer /> */}
        </div>
      )}
    </main>
  );
}
