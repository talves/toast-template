import { h } from "preact";
import { Box } from "../Box.js";
import NavigationBar from "../NavigationBar/index.js";
import Navigation from "../Navigation/index.js";
import { useState } from "preact/hooks";

const HeaderWrapper = (props) => (
  <Box as="header" {...props}>
    {props.children}
  </Box>
);

export const ThemeSwitcher = (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);

export default ({data={}, ...props}) => {
  const [onOff, setOnOff] = useState(false);
  return (
    <NavigationBar {...props} onToggle={setOnOff}>
      <Navigation class="right-8" data={data} toggle={onOff} />
    </NavigationBar>
  );
};
