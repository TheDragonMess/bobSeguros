// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Duration from "./Duration";
import AvgDurationModal from "./Modal";
import SectionTitle from "components/SectionTitle";

// Hooks
import useShowModal from "hooks/useShowModal";

function AvgDuration(props) {
  const avgDurationModal = useShowModal();

  return (
    <div className="avg-duration-box d-flex justify-content-end">
      <div className="inner d-flex flex-column justify-content-between">
        <SectionTitle
          title="Tiempo Prom."
          onClickBar={avgDurationModal.show}
        />

        <Duration {...props} />
      </div>

      {avgDurationModal.isShowing && (
        <AvgDurationModal {...props} isShowing onHide={avgDurationModal.hide} />
      )}
    </div>
  );
}

AvgDuration.propTypes = {
  status: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(AvgDuration);
