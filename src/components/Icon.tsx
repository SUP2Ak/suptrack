import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

function Icon({ name, size = "xs" }: { name: string; size?: SizeProp }) {
  return <FontAwesomeIcon icon={fas[name]} size={size} />;
}

export default Icon;