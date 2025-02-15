import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

function Icon({ name, size = "2x" }: { name: string; size?: SizeProp }) {
  const icon = fas[name] || far[name] || fab[name];
  return <FontAwesomeIcon icon={icon} size={size} />;
}

export default Icon;