import FlexContainer from ".";
import { FlexContainerProps } from ".";

export default {
  title: "FlexContainer",
  component: FlexContainer,
  tags:["autodocs"]
};

const children = (
  <>
    <div className="flex-item red">Item 1</div>
    <div className="flex-item blue">Item 2</div>
    <div className="flex-item green">Item 3</div>
  </>
);

export const Basic = {
  args: {
    children,
    justify: "start",
    align: "top",
    direction: "row",
    height: 300,
    showBorder: true,
  },
} as { args: FlexContainerProps };