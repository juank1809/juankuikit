import React from "react";

interface FileIconProps {
  className?: string;
}

const FileIcon: React.FC<FileIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.1167 9.10107V3.60107L18.6167 9.10107H13.1167ZM6.1167 2.10107C5.0067 2.10107 4.1167 2.99107 4.1167 4.10107V20.1011C4.1167 20.6315 4.32741 21.1402 4.70249 21.5153C5.07756 21.8904 5.58627 22.1011 6.1167 22.1011H18.1167C18.6471 22.1011 19.1558 21.8904 19.5309 21.5153C19.906 21.1402 20.1167 20.6315 20.1167 20.1011V8.10107L14.1167 2.10107H6.1167Z" />
    </svg>
  );
};

export default FileIcon;
