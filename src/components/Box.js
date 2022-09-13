import { createElement } from "react";

export const Box = ({ as = "div", children, ...props }) => {
  return createElement(as, props, children);
};
