import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";

import DropZone from "./DropZone";
export default {
  component: DropZone,
  title: "Components/DropZone",
} as Meta;

const Template: Story = (args) => <DropZone {...args} />;

export const Default = Template.bind({});
