import React from "react";
import { ComponentMeta } from "@storybook/react";
import RoundedButton from "./RoundedButton";

export default {
    title: "inputs/RoundedButton",
    componente: RoundedButton,
} as ComponentMeta<typeof RoundedButton>;

export const MeuBotao = () => <RoundedButton />;
