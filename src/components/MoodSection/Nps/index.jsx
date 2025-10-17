// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import NpsModal from "./Modal";

// Hooks
import useShowModal from "hooks/useShowModal";

// Utils
import isNumber from "utils/isNumber";
import isValidString from "utils/isValidString";

function Nps({ value }) {
  const npsModal = useShowModal();

  // Check if has nps
  const hasNps = isNumber(value) || isValidString(value);

  // Define nps
  const nps = hasNps ? value : 0;

  return (
    <>
      <div
        role="button"
        className="nps-box position-absolute d-flex align-items-center justify-content-center"
        onClick={npsModal.show}
      >
        <span className="nps fw-bold">NPS: {nps}</span>
      </div>

      {npsModal.isShowing && (
        <NpsModal isShowing nps={nps} onHide={npsModal.hide} />
      )}
    </>
  );
}

Nps.propTypes = {
  value: PropTypes.string,
};

export default memo(Nps);
