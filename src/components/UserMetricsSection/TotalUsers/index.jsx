// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import TotalUsersModal from "./Modal";
import SectionTitle from "components/SectionTitle";

// Hooks
import useShowModal from "hooks/useShowModal";

// Utils
import isNumber from "utils/isNumber";
import isValidString from "utils/isValidString";

function TotalUsers({ total }) {
  const totalUsersModal = useShowModal();

  // Check if 'total' prop has valid value
  const hasTotal = isNumber(total) || isValidString(total);

  // Define valid total conversations
  const totalUsers = hasTotal ? total : 0;

  return (
    <div className="total-users-box d-flex flex-column">
      <SectionTitle title="Usuarios únicos" onClickBar={totalUsersModal.show} />

      <h5 className="total-users fw-bold mb-0">{totalUsers}</h5>

      {totalUsersModal.isShowing && (
        <TotalUsersModal
          isShowing
          total={totalUsers}
          onHide={totalUsersModal.hide}
        />
      )}
    </div>
  );
}

TotalUsers.propTypes = {
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(TotalUsers);
