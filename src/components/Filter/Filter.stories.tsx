import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";
import { useState } from "react";
import Filter, { FilterProps } from "./Filter";
import FilterContainer from "./FilterContainer";
export default {
  component: Filter,
  title: "Components/Filter",
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args} />;
const ExampleTemplate: Story = (args) => {
  const [labelActive, setLabelActive] = useState<string>("");
  return (
    <FilterContainer
      labelActive={labelActive}
      setLabelActive={setLabelActive}
      {...args}
    />
  );
};
export const Left = Template.bind({});
Left.args = {
  type: "left",
  label: "Label",
};

export const LeftActive = Template.bind({});
LeftActive.args = {
  ...Left.args,
  active: true,
};

export const Center = Template.bind({});
Center.args = {
  type: "center",
  label: "Label",
};

export const CenterActive = Template.bind({});
CenterActive.args = {
  ...Center.args,
  active: true,
};

export const Right = Template.bind({});
Right.args = {
  type: "right",
  label: "Label",
};

export const RightActive = Template.bind({});
RightActive.args = {
  ...Right.args,
  active: true,
};

export const Example = ExampleTemplate.bind({});
Example.args = {
  children: [
    <Filter label="This" />,
    <Filter label="Is An" />,
    <Filter label="Example." />,
  ],
};
