import Switch from ".";
import { JSX, useState } from "react";
import { SwitchProps } from ".";

export default {
  title: "Switch",
  component: Switch,
  tags:["autodocs"]
};

const Template = (args: SwitchProps) => {
  const [checked, setChecked] = useState(false);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Basic = {
  args: {
    label: "switch",
    checked: false,
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const Horizontal = {
  args: {
    label: "switch",
    checked: false,
    orientation: "horizontal",
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };

export const Disabled = {
  args: {
    label: "switch",
    checked: true,
    disabled: true,
  },
  render: Template,
} as { args: SwitchProps; render: () => JSX.Element };