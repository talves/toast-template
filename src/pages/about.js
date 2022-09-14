import { h } from "preact";
import { Box } from "../components/Box.js";
import { useSiteData } from "../site-data-provider.js";

export default (props) => {
  const data = useSiteData();
  return (
    <Box>
      <Box as="div" class="bg-header">
        Site Data JSON
      </Box>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
};
