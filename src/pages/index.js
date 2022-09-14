import { h } from "preact";
import { Box, Nav, Example } from "../components/index.js";
import { useSiteData } from "../site-data-provider.js";

export default (props) => {
  const data = useSiteData();
  return (
    <Box class="bg-gray-400 font-sans leading-normal tracking-normal">
      <Nav menu={data?.navigation?.menu}/>
      <Example header={data?.header}/>
      <div>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </Box>
  );
};
