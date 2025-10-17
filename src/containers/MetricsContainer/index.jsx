// Librarys
import PropTypes from "prop-types";

// Components
import MoodSection from "components/MoodSection";
import StatsSection from "components/StatsSection";
import TopicsSection from "components/TopicsSection";
import UserMetricsSection from "components/UserMetricsSection";

export default function MetricsContainer({ metrics, moods }) {
  return (
    <section className="metrics-container d-flex align-items-start">
      <div className="box w-100 mx-auto d-flex align-items-stretch">
        <aside className="left-aside d-flex flex-column">
          <UserMetricsSection
            avg={metrics?.avg}
            channels={metrics?.channels}
            totalUsers={metrics?.totalUsers}
          />

          <MoodSection nps={metrics?.nps} moods={moods} />

          <TopicsSection topics={metrics?.topics} actions={metrics?.actions} />
        </aside>

        <aside className="right-aside">
          <StatsSection
            faqs={metrics?.faqs}
            stats={metrics?.stats}
            outcomeStats={metrics?.outcomeStats}
          />
        </aside>
      </div>
    </section>
  );
}

MetricsContainer.propTypes = {
  metrics: PropTypes.object.isRequired
};
