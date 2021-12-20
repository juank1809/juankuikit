import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";
import Island, { IslandProps } from "./Island";
export default {
  component: Island,
  title: "Components/Island",
} as Meta;

const Template: Story<IslandProps> = (args) => <Island {...args} />;

export const IslandDefault = Template.bind({});
IslandDefault.args = {
  badgeText: "Your text",
  head: "Head",
  description: "Description",
  mainButtonLabel: "Button",
  secondaryButtonLabel: "Params",
  tertiaryButtonLabel: "Params",
};

export const IslandWithProgress = Template.bind({});
IslandWithProgress.args = {
  ...IslandDefault.args,
  progress: 33,
};

export const IslandWithProgressCompleted = Template.bind({});
IslandWithProgressCompleted.args = {
  ...IslandDefault.args,
  progress: 100,
};
