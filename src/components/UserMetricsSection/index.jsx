// Librarys
import PropTypes from "prop-types";

// Components
import Channels from "./Channels";
import TotalUsers from "./TotalUsers";
import AvgDuration from "./AvgDuration";

export default function UserMetricsSection({ avg, channels, totalUsers }) {
  return (
    <div>
      <h5 className="section-name">Conversaciones</h5>

      <section className="channels-metrics-section d-flex align-items-stretch">
        <TotalUsers {...totalUsers} />
        <Channels {...channels} />
        <AvgDuration {...avg} />
      </section>
    </div>
  );
}

UserMetricsSection.propTypes = {
  channels: PropTypes.object.isRequired,
  avg: PropTypes.object.isRequired,
  totalUsers: PropTypes.object.isRequired,
};
