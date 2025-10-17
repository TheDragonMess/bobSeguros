// Librarys
import PropTypes from "prop-types";

// Components
import Item from "./Item";

export default function ChannelsPercentages({ web, whatsapp, appMobile }) {
  return (
    <div className="w-100 percentages-box d-flex align-items-center">
      <Item label="Web" percentage={web} />
      <div className="separator" />
      <Item label="Whatsapp" percentage={whatsapp} />
      <div className="separator" />
      <Item label="App Mobile" percentage={appMobile} />
    </div>
  );
}

ChannelsPercentages.propTypes = {
  web: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  whatsapp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  appMobile: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
