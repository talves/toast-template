import { h } from "preact";
import { Box, Example } from "../components/index.js";
import { useSiteData } from "../site-data-provider.js";

export default (props) => {
  const data = useSiteData();
  return (
    <Box class="bg-gray-400 font-sans leading-normal tracking-normal dark:bg-gray-700">
      <Example header={data?.header}/>
    </Box>
  );
};
