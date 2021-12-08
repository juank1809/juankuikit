import React from "react";

export interface CheckBoxProps {
  label: string;
  error?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, error }) => {
  return (
    <div className={`container ${error && "container--error"}`}>
      <label
        style={{
          order: 2,
        }}
        htmlFor={label}
        className="p-2"
      >
        {label}
      </label>
      <input
        id={label}
        className={`check-box ${error && "check-box--error"}`}
        type="checkbox"
      />
    </div>
  );
};

export default CheckBox;
