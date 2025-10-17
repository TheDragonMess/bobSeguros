// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Utils
import isValidString from "utils/isValidString";

function FAQ({ faq }) {
  // Get answer
  const answer = faq?.answer;

  // Get question
  const question = faq?.question;

  // Check if has answer
  const hasAnswer = isValidString(answer);

  // Check if has question
  const hasQuestion = isValidString(question);

  return (
    <li className="faq-item">
      <div className="wrapper d-flex align-items-center justify-content-between">
        <span className="faq-question">
          {hasQuestion ? question : "Pregunta no formulada"}
        </span>

        <span className="faq-answer text-center">
          {hasAnswer ? answer : "-"}
        </span>
      </div>

      <div className="separator w-100" />
    </li>
  );
}

FAQ.propTypes = {
  faq: PropTypes.object.isRequired,
};

export default memo(FAQ);
