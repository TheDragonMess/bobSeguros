// Librarys
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function Portal({
  children,
  wrapperId = "react-portal-wrapper",
}) {
  return createPortal(children, document.getElementById("portals"), wrapperId);
}

Portal.propTypes = {
  wrapperId: PropTypes.string,
  children: PropTypes.node.isRequired,
};
