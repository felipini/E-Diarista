import React, { Component } from "react";
import { composeStory, ComponentStory, ComponentMeta } from "@storybook/react"

import Footer from "./Footer";

export default {
    title: "surfaces/Footer",
    components: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const Default = Template.bind({});
Default.args = {};