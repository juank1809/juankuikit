import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "./Input";
export default {
  component: Input,
  title: "Components/Input",
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const DefaultEmpty = Template.bind({});
DefaultEmpty.args = {
  label: "Your name",
  value: "",
};

export const DefaultFilled = Template.bind({});
DefaultFilled.args = {
  label: "Your name",
  value: "Michael Browk",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Your name",
  value: "",
};

export const DisabledFilled = Template.bind({});
DisabledFilled.args = {
  ...Disabled.args,
  value: "Michael Browk",
  inputProps: {
    disabled: true,
  },
};

export const ActiveEmpty = Template.bind({});
ActiveEmpty.args = {
  ...DefaultEmpty.args,
};

ActiveEmpty.parameters = {
  pseudo: {
    focus: true,
  },
};

export const ActivePlaceHolder = Template.bind({});
ActivePlaceHolder.args = {
  ...DefaultEmpty.args,
  inputProps: {
    placeholder: "Example, Michael",
  },
};
ActivePlaceHolder.parameters = {
  ...ActiveEmpty.parameters,
};

export const ErrorEmpty = Template.bind({});

ErrorEmpty.args = {
  ...DefaultEmpty.args,
  error: {
    error: true,
    errorMessage: "Текст ошибки",
  },
};

export const ErrorFilled = Template.bind({});
ErrorFilled.args = {
  value: "Michael Browk",
  label: "Your name",
  error: {
    error: true,
    errorMessage: "Текст ошибки",
  },
};

export const Success = Template.bind({});
Success.args = {
  value: "Michael Browk",
  label: "Your name",
  success: true,
};
