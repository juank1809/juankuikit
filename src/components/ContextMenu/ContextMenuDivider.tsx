import React from "react";

const ContextMenuDivider: React.FC = ({ children }) => {
  return <li className="menu__divider p-3">{children}</li>;
};

export default ContextMenuDivider;
