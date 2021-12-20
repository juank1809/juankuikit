import React, { InputHTMLAttributes } from "react";
import { SuccessIcon } from "../Icons";

export interface InputProps {
  label: string;
  value: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  error?: error;
  success?: boolean;
}

interface error {
  error: boolean;
  errorMessage: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  inputProps,
  error,
  success,
}) => {
  return (
    <>
      <div
        className={`input__container ${
          inputProps?.disabled ? "input__container--disabled" : ""
        } ${error?.error ? "input__container--error" : ""} ${
          success ? "input__container--success" : ""
        }`}
      >
        <input
          id={label}
          value={value}
          disabled
          type="text"
          className={`input ${value.length > 0 ? "input--filled" : ""} `}
          {...inputProps}
        />
        <label htmlFor="label" className="input__label p-2">
          {label}
        </label>
        {success ? <SuccessIcon className="input__success-icon" /> : <></>}
      </div>
      {error?.error ? (
        <p className="p-2 input__error-message">{error.errorMessage}</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default Input;
