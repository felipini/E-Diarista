import React from "react";
import { composeStory, ComponentStory, ComponentMeta } from "@storybook/react"

import Header from "./Header";

export default {
    title: "Surface/Header",
    compoment: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};