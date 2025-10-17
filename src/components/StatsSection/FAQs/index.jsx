// Librarys
import PropTypes from "prop-types";

// Components
import FAQList from "./FAQList";
import FAQsSelect from "./FAQsSelect";
import MessageBox from "components/MessageBox";

export default function FAQs({ faqs, hasFaqs }) {
  return (
    <section className="faqs-section">
      <FAQsSelect />

      {hasFaqs && <FAQList faqs={faqs} />}

      {!hasFaqs && (
        <MessageBox message="Actualmente no hay preguntas frecuentes para mostrar..." />
      )}
    </section>
  );
}

FAQs.propTypes = {
  hasFaqs: PropTypes.bool,
  faqs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
