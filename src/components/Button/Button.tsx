import React from "react";
import { AddIcon } from "../Icons";

export interface ButtonProps {
  type: buttonType;
  rounded?: boolean;
  hasIcon?: boolean;
  label: string;
  isLoading?: boolean;
  className?: string;
}

type buttonType =
  | "primary"
  | "primary-white"
  | "secondary"
  | "secondary-white"
  | "flat"
  | "flat-white"
  | "secondary-dark";

const Button: React.FC<ButtonProps> = ({
  type,
  rounded = false,
  hasIcon = false,
  label,
  isLoading = false,
  className,
}) => {
  return (
    <button
      className={`button ${`button--${type}`} ${
        rounded && hasIcon && !label ? "button--rounded" : ""
      } ${!label && hasIcon && "button--squared"} ${
        isLoading && "button--loading"
      } ${className}`}
    >
      {hasIcon && <AddIcon />}

      <span className="button__text">{label}</span>
    </button>
  );
};

export default Button;
