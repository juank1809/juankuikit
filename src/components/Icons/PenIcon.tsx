interface PenIconProps {
  className?: string;
}

const PenIcon: React.FC<PenIconProps> = ({ className }) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.3599 4.94072C19.0338 4.61604 18.6134 4.40274 18.1588 4.33129C17.7042 4.25984 17.2386 4.33391 16.8286 4.5429C16.8054 4.5098 16.5885 4.2704 16.5033 4.1845C16.0973 3.77943 15.5472 3.55194 14.9736 3.55194C14.4001 3.55194 13.85 3.77943 13.444 4.1845L9.59248 8.03599C9.46048 8.16803 9.38632 8.3471 9.38632 8.5338C9.38632 8.72051 9.46048 8.89957 9.59248 9.03161C9.72559 9.16158 9.90425 9.23433 10.0903 9.23433C10.2763 9.23433 10.455 9.16158 10.5881 9.03161L14.4396 5.18012C14.5813 5.03853 14.7734 4.95899 14.9736 4.95899C15.1739 4.95899 15.366 5.03853 15.5077 5.18012L15.7654 5.43853L14.1988 7.00447C14.1304 7.07309 14.092 7.16601 14.092 7.26288C14.092 7.35975 14.1304 7.45266 14.1988 7.52129L16.78 10.099C16.8484 10.1673 16.9411 10.2057 17.0378 10.2057C17.1344 10.2057 17.2271 10.1673 17.2955 10.099L19.3599 8.03459C19.7698 7.62413 20.0001 7.06775 20.0001 6.48765C20.0001 5.90755 19.7698 5.35117 19.3599 4.94072ZM13.4243 8.29504C13.3558 8.22672 13.263 8.18835 13.1663 8.18835C13.0695 8.18835 12.9767 8.22672 12.9082 8.29504L7.11547 14.0892C7.01362 14.1908 6.93282 14.3115 6.87768 14.4444C6.82255 14.5773 6.79417 14.7198 6.79417 14.8637C6.79417 15.0076 6.82255 15.1501 6.87768 15.283C6.93282 15.4159 7.01362 15.5366 7.11547 15.6382L8.66451 17.1873C8.76615 17.2891 8.88687 17.3699 9.01978 17.4251C9.15268 17.4802 9.29515 17.5086 9.43904 17.5086C9.58292 17.5086 9.72539 17.4802 9.8583 17.4251C9.9912 17.3699 10.1119 17.2891 10.2136 17.1873L16.007 11.3938C16.0753 11.3253 16.1137 11.2325 16.1137 11.1358C16.1137 11.039 16.0753 10.9462 16.007 10.8777L13.4243 8.29504ZM5.81773 15.9673C5.87463 15.9839 5.92642 16.0146 5.9683 16.0566L8.39114 18.4801C8.43309 18.522 8.46379 18.5738 8.48039 18.6307C8.49699 18.6876 8.49896 18.7478 8.48611 18.8056C8.47326 18.8635 8.44601 18.9172 8.40688 18.9617C8.36776 19.0062 8.31802 19.0402 8.26229 19.0603L4.46995 20.4291C4.4068 20.4509 4.33883 20.4546 4.27367 20.44C4.20851 20.4253 4.14872 20.3928 4.10099 20.346C4.05373 20.2988 4.02088 20.2391 4.00629 20.1739C3.99171 20.1087 3.99598 20.0407 4.01861 19.9778L5.38811 16.1854C5.40829 16.1297 5.44221 16.08 5.48674 16.0409C5.53126 16.0017 5.58494 15.9745 5.6428 15.9616C5.70066 15.9488 5.76083 15.9507 5.81773 15.9673Z"
      />
    </svg>
  );
};

export default PenIcon;