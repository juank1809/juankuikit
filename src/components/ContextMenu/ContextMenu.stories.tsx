import * as React from "react";
import "../../styles/main.scss";

import { Story, Meta } from "@storybook/react";

import { ContextMenu, ContextMenuItem, ContextMenuDivider } from "./";
export default {
  component: ContextMenu,
  subcomponents: { ContextMenuItem, ContextMenuDivider },
  title: "Components/ContextMenu",
} as Meta;

const Template: Story = (args) => <ContextMenu {...args} />;

export const OpenedActive = Template.bind({});

OpenedActive.args = {
  children: [
    <ContextMenuItem>Russia</ContextMenuItem>,
    <ContextMenuItem>USA</ContextMenuItem>,
    <ContextMenuItem>Germany</ContextMenuItem>,
  ],
};

export const Multiply = Template.bind({});

Multiply.args = {
  children: [
    <ContextMenuDivider>Time</ContextMenuDivider>,
    <ContextMenuItem>Days</ContextMenuItem>,
    <ContextMenuItem>Weeks</ContextMenuItem>,
    <ContextMenuItem>Years</ContextMenuItem>,
    <ContextMenuDivider>Country</ContextMenuDivider>,
    ...OpenedActive.args.children,
  ],
};
