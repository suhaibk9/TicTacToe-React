import { ImCross } from "react-icons/im";
import { FaPenAlt } from "react-icons/fa";
import { VscCircleLarge } from "react-icons/vsc";
const Icon = ({ name }) => {
  if (name === "cross") {
    return <ImCross />;
  } else if (name === "circle") {
    return <VscCircleLarge />;
  } else if (name === "pen") {
    return <FaPenAlt />;
  }
  return null;
};
export default Icon;
