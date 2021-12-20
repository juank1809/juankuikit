export interface SuccessIconProps {
  className?: string;
  withBackground?: boolean;
}

const SuccessIcon: React.FC<SuccessIconProps> = ({
  className,
  withBackground,
}) => {
  return (
    <div
      className={`success-icon__container ${
        withBackground ? "success-icon__container--background" : ""
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.71996 8.00006C4.5323 7.8313 4.28778 7.73973 4.03543 7.74373C3.78308 7.74773 3.54158 7.84699 3.35936 8.02162C3.17715 8.19624 3.0677 8.4333 3.05297 8.68525C3.03825 8.9372 3.11933 9.1854 3.27996 9.38006L5.49996 11.7101C5.5929 11.8076 5.70459 11.8853 5.82832 11.9386C5.95204 11.9918 6.08525 12.0195 6.21996 12.0201C6.35395 12.0208 6.48673 11.9947 6.61041 11.9432C6.7341 11.8916 6.84616 11.8158 6.93996 11.7201L13.72 4.72006C13.8119 4.62551 13.8843 4.51378 13.933 4.39124C13.9818 4.26871 14.0059 4.13778 14.004 4.00592C14.0022 3.87406 13.9744 3.74386 13.9222 3.62275C13.87 3.50163 13.7945 3.39199 13.7 3.30006C13.6054 3.20814 13.4937 3.13573 13.3711 3.08699C13.2486 3.03824 13.1177 3.01411 12.9858 3.01597C12.854 3.01783 12.7238 3.04564 12.6026 3.09781C12.4815 3.14999 12.3719 3.22551 12.28 3.32006L6.22996 9.58006L4.71996 8.00006Z" />
      </svg>
    </div>
  );
};

export default SuccessIcon;
