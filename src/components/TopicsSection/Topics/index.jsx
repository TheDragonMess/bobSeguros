// Librarys
import PropTypes from "prop-types";

// Components
import TopicList from "./List";
import SectionTitle from "components/SectionTitle";

export default function Topics({ title, topics, onClickBar, emptyMessage }) {
  return (
    <article className="topics-box d-flex flex-column">
      <SectionTitle title={title} onClickBar={onClickBar} />
      <TopicList topics={topics} emptyMessage={emptyMessage} />
    </article>
  );
}

Topics.propTypes = {
  onClickBar: PropTypes.func,
  emptyMessage: PropTypes.string,
  title: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
};
