import React, { useState, useCallback, useEffect } from "react";
import ContextMenuMenuItem from "./ContextMenuItem";

interface ContextMenuProps {}

//AnchorPoint tells us where in the page the user clicked.
interface AnchorPoint {
  x: number;
  y: number;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
  const [anchorPoint, setAnchorPoint] = useState<AnchorPoint>({ x: 0, y: 0 });
  const [show, setShow] = useState<boolean>(false);

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);
  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {show ? (
        <ul
          className="menu"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          {children}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default ContextMenu;
