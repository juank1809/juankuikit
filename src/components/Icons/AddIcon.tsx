import React from "react";

interface AddIconProps {
  className?: string;
}

const AddIcon: React.FC<AddIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.13332 10.8555C4.50125 10.8555 3.98887 11.3679 3.98887 11.9999C3.98887 12.632 4.50126 13.1444 5.13332 13.1444L10.8554 13.1444L10.8554 18.8667C10.8554 19.4988 11.3678 20.0112 11.9999 20.0112C12.632 20.0112 13.1444 19.4988 13.1444 18.8667L13.1443 13.1444L18.8667 13.1444C19.4988 13.1444 20.0112 12.632 20.0112 11.9999C20.0112 11.3679 19.4988 10.8555 18.8667 10.8555L13.1443 10.8555L13.1443 5.13332C13.1443 4.50125 12.632 3.98887 11.9999 3.98887C11.3678 3.98887 10.8554 4.50125 10.8554 5.13332L10.8554 10.8555L5.13332 10.8555Z"
      />
    </svg>
  );
};

export default AddIcon;
