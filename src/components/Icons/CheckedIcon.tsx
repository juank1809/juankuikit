import React from "react";

interface CheckedIconProps {
  className?: string;
}

const CheckedIcon: React.FC<CheckedIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.43762 12.6425C6.1635 12.4176 5.80629 12.2955 5.43766 12.3009C5.06903 12.3062 4.71625 12.4385 4.45007 12.6712C4.18389 12.9039 4.02401 13.2199 4.00249 13.5556C3.98098 13.8914 4.09942 14.2222 4.33407 14.4816L7.57705 17.5868C7.71283 17.7168 7.87598 17.8204 8.05672 17.8913C8.23745 17.9623 8.43205 17.9993 8.62883 18C8.82456 18.001 9.01853 17.9662 9.19921 17.8975C9.37989 17.8288 9.54359 17.7277 9.68061 17.6002L19.5849 8.27119C19.7191 8.14518 19.8249 7.99628 19.8961 7.83298C19.9673 7.66968 20.0026 7.49518 19.9999 7.31945C19.9971 7.14372 19.9565 6.9702 19.8803 6.80879C19.8041 6.64738 19.6938 6.50125 19.5556 6.37874C19.4175 6.25624 19.2543 6.15974 19.0753 6.09478C18.8963 6.02982 18.705 5.99766 18.5124 6.00013C18.3198 6.00261 18.1296 6.03967 17.9527 6.10921C17.7758 6.17874 17.6156 6.27939 17.4813 6.4054L8.64344 14.7482L6.43762 12.6425Z"
        fill="#111111"
      />
    </svg>
  );
};

export default CheckedIcon;
