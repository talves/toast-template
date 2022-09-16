import { h } from "preact";
import { Box } from "../components/Box.js";
import { useSiteData } from "../site-data-provider.js";

export default (props) => {
  const data = useSiteData();
  return (
    <Box class="min-h-screen">
      <Box as="div" class="h-20 items-center">
        <Box as="h1" class="text-center">
          About
        </Box>
      </Box>
    </Box>
  );
};
