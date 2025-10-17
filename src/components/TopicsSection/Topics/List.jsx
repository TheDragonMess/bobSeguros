// Librarys
import PropTypes from "prop-types";

// Components
import MessageBox from "components/MessageBox";

// UTILS
import isValidArray from "utils/isValidArray";

export default function TopicList({ topics, emptyMessage }) {
  // Check if has topics
  const hasTopics = isValidArray(topics);

  if (!hasTopics) {
    return <MessageBox message={emptyMessage} />;
  }

  return (
    <ul className="topic-list list-unstyled m-0 p-0 d-grid">
      {topics.map((topic, i) => {
        return (
          <li key={`topic-${topic?._id ?? i}`} className="topic-item">
            {i + 1}. {topic?.label}
          </li>
        );
      })}
    </ul>
  );
}

TopicList.propTypes = {
  emptyMessage: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
};
