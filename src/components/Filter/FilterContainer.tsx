import { Children, isValidElement } from "react";
import Filter, { filterType } from "./Filter";

interface FilterContainerProps {
  labelActive: string;
  setLabelActive: (arg: string) => void;
}

const FilterContainer: React.FC<FilterContainerProps> = ({
  children,
  labelActive,
  setLabelActive,
}) => {
  const arrayChildren = Children.toArray(children);
  return (
    <div className="filter__container">
      {Children.map(arrayChildren, (child, idx) => {
        let type: filterType;

        if (idx === 0) {
          type = "left";
        } else if (arrayChildren.length - 1 === idx) {
          type = "right";
        } else {
          type = "center";
        }

        if (isValidElement(child)) {
          return (
            <Filter
              key={idx}
              type={type}
              active={child.props.label === labelActive}
              onClick={() => setLabelActive(child.props.label)}
              label={child.props.label}
            />
          );
        }
      })}
    </div>
  );
};

export default FilterContainer;
