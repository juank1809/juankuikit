import { HTMLAttributes } from "react";

interface ButtonWithIconProps {
  Icon: React.ReactNode;
  label: string;
  otherProps?: HTMLAttributes<HTMLButtonElement>;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  Icon,
  label,
  ...otherProps
}) => {
  return (
    <button className="button-with-icon" {...otherProps}>
      {Icon}
      <span className="p-2">{label}</span>
    </button>
  );
};
