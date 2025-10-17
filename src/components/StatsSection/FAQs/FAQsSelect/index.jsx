// Librarys
import { useState } from "react";

// Components
import Select from "components/Select";

// Constants
import faqs, { FREQUENTLY_ASKED_QUESTIONS } from "./faqs";

export default function FAQsSelect() {
  const [selectedFAQ, setSelectedFAQ] = useState(FREQUENTLY_ASKED_QUESTIONS);

  return (
    <Select
      options={faqs}
      selectedValue={selectedFAQ}
      onChange={(option) => setSelectedFAQ(option?.value)}
      className="faqs-select mb-3"
      focusSelect={false}
    />
  );
}
