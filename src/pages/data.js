import { h } from "preact";
import { useSiteData } from "../site-data-provider.js";

export default (props) => {
  const data = useSiteData();
  return (
    <div class="flex flex-row">
      <div class="w-20"></div>
      <div class="w-px bg-primary-600"></div>
      <div class="w-auto">
        <div as="div" class="">
          Site Data JSON
        </div>
        <pre class="overflow-scroll">{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div class="w-20"></div>
    </div>
  );
};
