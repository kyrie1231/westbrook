import Button from ".";
import { ZoomIn } from "lucide-react";
import { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  tags:["autodocs"]
};

export const Contained = {
  args: {
    title: "Search",
    variant: "contained",
  },
} as { args: ButtonProps };

export const Outlined = {
  args: {
    title: "Search",
    variant: "outlined",
  },
} as { args: ButtonProps };

export const Small = {
  args: {
    title: "Search",
    size: "small",
  },
} as { args: ButtonProps };

export const Medium = {
  args: {
    title: "Search",
    size: "medium",
  },
} as { args: ButtonProps };

export const Large = {
  args: {
    title: "Search",
    size: "large",
  },
} as { args: ButtonProps };

export const Disabled = {
  args: {
    title: "Search",
    disabled: true,
  },
} as { args: ButtonProps };

export const Rounded = {
  args: {
    title: "Search",
    rounded: "large",
  },
} as { args: ButtonProps };

export const Withicon={
  args:{
    title:"Search",
    icon:<ZoomIn/>
  }
}

export const Withloading={
  args:{
    title:"Search",
    loading:true,
  },
} as {args:ButtonProps};
