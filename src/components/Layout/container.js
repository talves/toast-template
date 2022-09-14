import { h } from "preact";
import { Box } from "../Box.js";

export default (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);
