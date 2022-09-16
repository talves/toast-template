import { h } from "preact";
import { Box } from "../Box.js";
import FooterSection from "./footer-section.js";

const FooterWrapper = (props) => (
  <Box as="footer" {...props} class="sticky bottom-0 w-full flex flex-col mt-8">
    <Box class="overflow-x-auto my-auto dark:bg-gray-800 dark:text-gray-100">{props.children}</Box>
  </Box>
);

export default (props) => {
  
  return (
    <FooterWrapper>
      <FooterSection data={props?.data} />
    </FooterWrapper>
  );
};
