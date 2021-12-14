import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";
import Notification, { NotificationProps } from "./Notification";
export default {
  component: Notification,
  title: "Components/Notification",
} as Meta;

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
  state: "success",
  head: "Head",
  description: "Description",
  buttons: true,
};

export const SuccessWithoutButtons = Template.bind({});
SuccessWithoutButtons.args = {
  ...Success.args,
  buttons: false,
};

export const SuccessWithoutButtonsAndHead = Template.bind({});
SuccessWithoutButtonsAndHead.args = {
  state: "success",
  description: "Description",
};

export const Error = Template.bind({});
Error.args = {
  ...Success.args,
  state: "error",
};

export const ErrorWithoutDescription = Template.bind({});
ErrorWithoutDescription.args = {
  state: "error",
  head: "Head",
  buttons: true,
};

export const Info = Template.bind({});
Info.args = {
  ...Success.args,
  state: "info",
};
