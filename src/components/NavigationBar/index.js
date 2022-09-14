import { h } from "preact";
import { Box } from "../Box.js";

const NavigationBarWrapper = (props) => {
  return (
    <Box as="header" {...props} className={props.className}>
      {props.children}
    </Box>
  );
};

export const ThemeSwitcher = (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);

const NavigationBar = (props) => {
  return (
    <NavigationBarWrapper className="relative flex flex-row h-18 p-2 bg-transparent font-medium dark:bg-gray-800 dark:text-gray-100">
      <Box className="flex h-16">
        <Box as="a" href="/" className="h-16 flex-item">
          <Box
            as="span"
            className="absolute top-2 text-4xl font-semibold italic"
          >
            {props.header}
          </Box>
        </Box>
      </Box>
      {props.children}
      <Box className="float-right absolute right-0">
        <ThemeSwitcher displayMode={false} />
      </Box>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;
