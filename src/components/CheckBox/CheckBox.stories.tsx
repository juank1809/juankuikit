import * as React from "react";
import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";

import CheckBox, { CheckBoxProps } from "./CheckBox";
export default {
  component: CheckBox,
  title: "Components/CheckBox",
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Text",
};

export const OnError = Template.bind({});

OnError.args = {
  ...Default.args,
  error: true,
};
