// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import isValidString from "utils/isValidString";

function MessageBox({ message }) {
  // Validate 'message' prop
  if (!isValidString(message)) return null;

  return (
    <section className="message-box text-center h-100 d-flex align-items-center">
      <p className="message">{message}</p>
    </section>
  );
}

MessageBox.propTypes = {
  message: PropTypes.string,
};

export default memo(MessageBox);
