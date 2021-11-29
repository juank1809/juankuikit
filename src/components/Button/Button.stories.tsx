import React from "react";
import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "primary",
  label: "Кнопка",
  rounded: false,
  hasIcon: true,
};

export const PrimaryWhite = Template.bind({});

PrimaryWhite.args = {
  ...Primary.args,
  type: "primary-white",
};
PrimaryWhite.parameters = {
  backgrounds: { default: "primary" },
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  type: "secondary",
};

export const SecondaryWhite = Template.bind({});

SecondaryWhite.args = {
  ...Primary.args,
  type: "secondary-white",
};

SecondaryWhite.parameters = {
  backgrounds: { default: "primary" },
};

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
  ...Primary.args,
  type: "secondary-dark",
};

export const Flat = Template.bind({});

Flat.args = {
  ...Primary.args,
  type: "flat",
};

export const FlatWhite = Template.bind({});

FlatWhite.args = {
  ...Primary.args,
  type: "flat-white",
};

FlatWhite.parameters = {
  backgrounds: { default: "primary" },
};
