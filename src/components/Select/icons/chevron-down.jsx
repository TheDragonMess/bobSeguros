// Librarys
import { memo } from "react";

function ChevronDown({ onClick }) {
  return (
    <svg
      width="11"
      height="7"
      fill="none"
      viewBox="0 0 11 7"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        fill="#00498C"
        stroke="#00498C"
        d="M5.74694 5.89542L9.90279 1.60959C10.0357 1.4677 10.0318 1.24161 9.89427 1.10458C9.76005 0.970896 9.54729 0.970896 9.4131 1.10458L5.5021 5.13791L1.5911 1.10458C1.45587 0.965139 1.23663 0.965139 1.10141 1.10458C0.966199 1.24405 0.966199 1.47013 1.10141 1.60958L5.25725 5.89542C5.3925 6.03486 5.61172 6.03486 5.74694 5.89542Z"
      />
    </svg>
  );
}

export default memo(ChevronDown);
