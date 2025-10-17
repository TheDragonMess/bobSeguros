// Librarys
import PropTypes from "prop-types";

// Components
import FAQ from "./FAQ";

export default function FAQList({ faqs }) {
  return (
    <ul className="faq-list d-flex flex-column list-unstyled m-0">
      {faqs.map((faq, i) => (
        <FAQ faq={faq} key={`faq-${faq?._id ?? i}`} />
      ))}
    </ul>
  );
}

FAQList.propTypes = {
  faqs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
