// Librarys
import { memo, useState } from "react";

// Components
import Select from "components/Select";

// Constants
import { DAY, dateFilterOptions } from "./constants";

// Images
import bossTechLogo from "./logos/boss-tech-logo.png";

function Header() {
  const [dateFilter, setDateFilter] = useState(DAY);

  return (
    <header className="app-header position-fixed w-100 d-flex align-items-center">
      <div className="box pe-5 py-2 w-100 mx-auto d-flex align-items-center justify-content-between">
        <div className="app-name-box d-flex align-items-center">
          <h2 className="app-name mb-0 fw-bold">SEGUROS Perú</h2>

          <Select
            className="date-filter"
            selectedValue={dateFilter}
            options={dateFilterOptions}
            onChange={(option) => setDateFilter(option?.value)}
          />
        </div>

        <img
          width={47}
          height={44}
          loading="lazy"
          alt="boss-tech-logo"
          fetchpriority="high"
          className="boss-tech-logo"
          src={bossTechLogo}
        />
      </div>
    </header>
  );
}

export default memo(Header);
