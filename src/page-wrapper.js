import { h } from "preact";
import { Helmet } from "react-helmet";
import Layout from "./components/Layout/index.js";
import { Box } from "./components/Box.js";
import { OutsideLink } from "./components/Buttons/OutsideLink.js";
import { MDXProvider } from "@mdx-js/preact";
import { SiteDataProvider } from "./site-data-provider.js";

const mdxComponents = {
  wrapper: (props) => <div class="p-4" {...props} />,
  Box,
  OutsideLink,
  h1: (props) => <Box as="h1" {...props} class="heading h1-mdx" />,
  h2: (props) => <Box as="h2" {...props} class="heading h2-mdx" />,
  h3: (props) => <Box as="h3" {...props} class="heading h3-mdx" />,
  h4: (props) => <Box as="h4" {...props} class="heading h4-mdx" />,
  p: (props) => <Box as="p" {...props} class="paragraph-mdx" />,
  ul: (props) => <Box as="ul" {...props} class="ul-mdx" />,
  blockquote: (props) => (
    <Box as="blockquote" {...props} class="blockquote-mdx" />
  ),
  codeblock: ({ codestring, className, ...props }) => (
    <Box
      {...props}
      className={`bg-gray-800 p-6 ${className || ""}`}
    />
  ),
  "heading-link-icon": (props) => (
    <svg
      class="w-5 h-5"
      //   {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
        clipRule="evenodd"
      />
    </svg>
  ),
  // EmailLink,
  // Something: Thing,
};

// const components = {
//   codeblock: (props) => (
//     <div
//       class="bg-gray-900"
//       dangerouslySetInnerHTML={{ __html: props.children }}
//     />
//   ),
// };

export default function PageWrapper(props) {
  props.children.props.components = mdxComponents;
  const { meta = {} } = props;
  // if (props?.components === undefined) {
  //   props.components = mdxComponents;
  // }

  return (
    <SiteDataProvider url="/settings.json">
      <MDXProvider components={mdxComponents}>
        <Layout header="Toast Template" meta={meta}>{props.children}</Layout>
      </MDXProvider>
    </SiteDataProvider>
  );
}
