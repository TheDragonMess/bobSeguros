// Librarys
import PropTypes from "prop-types";

// Components
import ChannelsModal from "./Modal";
import ChannelsPercentages from "./Percentages";
import SectionTitle from "components/SectionTitle";

// Hooks
import useShowModal from "hooks/useShowModal";

export default function Channels(props) {
  const channelsModal = useShowModal();

  return (
    <div className="channels-box d-flex flex-column justify-content-between">
      <SectionTitle title="Canales" onClickBar={channelsModal.show} />
      <ChannelsPercentages {...props} />

      {channelsModal.isShowing && (
        <ChannelsModal {...props} isShowing onHide={channelsModal.hide} />
      )}
    </div>
  );
}

Channels.propTypes = {
  web: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  whatsapp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  appMobile: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
