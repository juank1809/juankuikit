import { useState } from "react";
import { CheckedIcon } from "../Icons";
const ContextMenuItem: React.FC = ({ children, ...props }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  function setActive(): void {
    setIsActive((prev) => !prev);
  }
  return (
    <li className="menu__list p-2" {...props} onClick={setActive}>
      {children}
      {isActive && <CheckedIcon />}
    </li>
  );
};

export default ContextMenuItem;
