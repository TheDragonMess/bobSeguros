// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import Button from "components/Button";
import Portal from "components/Portal";
import Times from "components/icons/times";

// Hooks
import useHideModalOnPressEscape from "./useHideModalOnPressEscape";

// Utils
import classnames from "utils/classnames";

function Modal({
  onHide,
  children,
  centered,
  modalRef,
  isShowing,
  className,
  isShowingCloseIcon = true,
}) {
  useHideModalOnPressEscape({ onHide });

  if (!isShowing) return null;

  return (
    <Portal wrapperId="modal-portal-container">
      <div
        ref={modalRef}
        className={classnames([
          "modal position-fixed overflow-hidden",
          centered ? "centered" : null,
          className,
        ])}
      >
        <div role="dialog" className="modal-backdrop" onClick={onHide}></div>

        <div className="modal-content">
          {isShowingCloseIcon && (
            <Button
              icon={<Times />}
              onClick={onHide}
              className="d-flex justify-content-end btn-close-modal"
            />
          )}

          <div className="content">{children}</div>
        </div>
      </div>
    </Portal>
  );
}

Modal.propTypes = {
  centered: PropTypes.bool,
  isShowing: PropTypes.bool,
  modalRef: PropTypes.object,
  className: PropTypes.string,
  onHide: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isShowingCloseIcon: PropTypes.bool,
};

export default memo(Modal, (prevProps, nextProps) => {
  return (
    prevProps.onHide === nextProps.onHide &&
    prevProps.children === nextProps.children &&
    prevProps.modalRef === nextProps.modalRef &&
    prevProps.isShowing === nextProps.isShowing &&
    prevProps.className === nextProps.className
  );
});
