import Input from ".";
import { InputProps } from ".";

export default {
  title: "Input",
  component: Input,
  tags:["autodocs"]
};

export const Basic = {
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby",
  },
} as { args: InputProps };

export const Large = {
  args: {
    label: "Hobby",
    placeholder:"Enter your hobby",
    size: "large",
  },
} as { args: InputProps };

export const Error = {
  args: {
    label: "Hobby",
    placeholder:"Enter your hobby",
    error: "Missing your dear",
  },
} as { args: InputProps };

export const Disabled = {
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby",
    disabled: true,
    value: "westbrook",
  },
} as { args: InputProps };

export const Rounded = {
  args: {
    label: "Hobby",
    placeholder: "Enter your hobby",
    rounded: "large",
  },
} as { args: InputProps };