// Librarys
import PropTypes from "prop-types";

// Components
import MoodBar from "./MoodBar";
import MessageBox from "components/MessageBox";

// Utils
import isValidArray from "utils/isValidArray";

export default function MoodBars({ moods }) {
  // Validate 'moods' prop
  if (!isValidArray(moods)) {
    return (
      <MessageBox message="Los análisis de ánimo y sentimiento aparecerán aquí cuando se recopilen suficientes datos." />
    );
  }

  return (
    <ul className="mood-bars d-flex mt-3 mb-0 p-0 w-100 align-items-stretch list-unstyled">
      {moods.map((mood, i) => (
        <MoodBar
          mood={mood}
          key={`mood-${mood?._id ?? i}`}
          isLastItem={moods.length - 1 === i}
        />
      ))}
    </ul>
  );
}

MoodBars.propTypes = {
  moods: PropTypes.arrayOf(PropTypes.object).isRequired,
};
