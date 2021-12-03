import React from "react";
import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";

export default {
  component: Badge,
  title: "Components/Badge",
} as Meta;

const Template: Story<BadgeProps & React.ReactNode> = (args) => (
  <Badge {...args} />
);

export const White = Template.bind({});
White.args = {
  children: "Your text",
  type: "white",
};

export const Primary = Template.bind({});

Primary.args = {
  children: "Your text",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Your text",
  type: "secondary",
};
