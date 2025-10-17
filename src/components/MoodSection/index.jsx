// Librarys
import PropTypes from "prop-types";

// Components
import Nps from "./Nps";
import MoodModal from "./Modal";
import MoodBars from "./MoodBars";
import SectionTitle from "components/SectionTitle";

// Hooks
import useShowModal from "hooks/useShowModal";

export default function MoodSection({ nps, moods }) {
  const moodModal = useShowModal();

  return (
    <div>
      <h5 className="section-name">Calidad y Experiencia</h5>

      <section className="mood-section d-flex flex-column position-relative">
        <Nps value={nps} />
        <SectionTitle title="Ánimo & Sentimiento" onClickBar={moodModal.show} />
        <MoodBars moods={moods} />

        {moodModal.isShowing && (
          <MoodModal isShowing moods={moods} onHide={moodModal.hide} />
        )}
      </section>
    </div>
  );
}

MoodSection.propTypes = {
  nps: PropTypes.string.isRequired,
  moods: PropTypes.arrayOf(PropTypes.object),
};
