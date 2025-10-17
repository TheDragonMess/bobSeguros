// Librarys
import { memo } from "react";

// Components
import AIIcon from "components/icons/ai-icon";
import UserIcon from "components/icons/user-icon";

function StatsHeaderIcons() {
  return (
    <div className="box w-50 d-flex align-items-center">
      <div className="icon-box w-50 d-flex align-items-center justify-content-center ps-3 pe-1">
        <UserIcon />
      </div>

      <div className="icon-box w-50 d-flex align-items-center justify-content-center px-3">
        <AIIcon />
      </div>
    </div>
  );
}

export default memo(StatsHeaderIcons);
