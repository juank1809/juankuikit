export interface FilterProps {
  label: string;
  type?: filterType;
  active?: boolean;
  onClick?: () => void;
}

export type filterType = "left" | "center" | "right";

const Filter: React.FC<FilterProps> = ({ label, type, active, ...props }) => {
  return (
    <button
      className={`filter filter--${type} ${active ? "filter--active " : ""}`}
      {...props}
    >
      <span className="p-2">{label}</span>
    </button>
  );
};

export default Filter;
