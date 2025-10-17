// Librarys
import PropTypes from "prop-types";

// Components
import Stat from "./Stat";
import MessageBox from "components/MessageBox";

export default function Stats({ stats, hasStats }) {
  // Validate 'stats' prop
  if (!hasStats) {
    return (
      <MessageBox message="Esta sección mostrará las estadísticas del usuario y de la IA tan pronto como los datos estén disponibles." />
    );
  }

  return (
    <ul className="stat-list d-flex flex-column list-unstyled p-0">
      {stats.map((stat, i) => (
        <Stat
          stat={stat}
          key={`stat-${stat?._id ?? i}`}
          isShowingLine={i !== stats.length - 1}
        />
      ))}
    </ul>
  );
}

Stats.propTypes = {
  hasStats: PropTypes.bool,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
