// Icons
import ResolvedIcon from "./ResolvedIcon";
import AbandonedIcon from "./AbandonedIcon";
import DerivationsIcon from "./DerivationsIcon";
import DisambiguationIcon from "./DisambiguationIcon";
import HallucinationsIcon from "./HallucinationsIcon";

// Constants
import {
  RESOLVED,
  ABANDONED,
  DERIVATIONS,
  DISAMBIGUATION,
  HALLUCINATIONS,
} from "./constants";

const icons = {
  [RESOLVED]: <ResolvedIcon />,
  [ABANDONED]: <AbandonedIcon />,
  [DERIVATIONS]: <DerivationsIcon />,
  [DISAMBIGUATION]: <DisambiguationIcon />,
  [HALLUCINATIONS]: <HallucinationsIcon />,
};

export default icons;
