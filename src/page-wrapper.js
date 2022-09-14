import { h } from "preact";
import { Helmet } from "react-helmet";
import Layout  from "./components/Layout/index.js"
import { MDXProvider } from "@mdx-js/preact";
import { SiteDataProvider } from "./site-data-provider.js";

const components = {
  codeblock: (props) => (
    <div
      class="bg-gray-900"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
};
export default function PageWrapper(props) {
  return (
    <SiteDataProvider url="/settings.json">
      <MDXProvider components={components}>
        <Layout header="Toast Template">{props.children}</Layout>
      </MDXProvider>
    </SiteDataProvider>
  );
}
