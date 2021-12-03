import React from "react";

export interface BadgeProps {
  type: badgeType;
}

type badgeType = "white" | "primary" | "secondary";

export const Badge: React.FC<BadgeProps> = ({ type, children }) => {
  return <div className={`badge badge--${type}`}>{children} </div>;
};

export default Badge;
